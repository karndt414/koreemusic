// Integrates with: app/melos/page.tsx

'use client';

import { useEffect, useState, type ChangeEvent } from 'react';
import { parseMidiFile } from './midiFileParser';
import {
  connectToMidiInput,
  disconnectMidi,
  getLiveMidiSnapshot,
  isWebMidiSupported,
  requestMidiAccess,
} from './midiLiveInput';
import type { MidiFileSummary, MidiSummary } from './types';

type MidiPanelProps = {
  onMidiSend: (summary: MidiSummary, message: string) => void;
  defaultOpen?: boolean;
  showToggle?: boolean;
};

type MidiTab = 'file' | 'live';

export default function MidiPanel({
  onMidiSend,
  defaultOpen = false,
  showToggle = true,
}: MidiPanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [activeTab, setActiveTab] = useState<MidiTab>('file');
  const [status, setStatus] = useState('MIDI Ready');
  const [error, setError] = useState<string | null>(null);

  const [fileSummary, setFileSummary] = useState<MidiFileSummary | null>(null);
  const [isParsing, setIsParsing] = useState(false);

  const [liveInputs, setLiveInputs] = useState<{ id: string; name: string }[]>([]);
  const [selectedPortId, setSelectedPortId] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [eventCount, setEventCount] = useState(0);
  const [midiMessage, setMidiMessage] = useState('');

  const liveSupported = isWebMidiSupported();

  useEffect(() => {
    const handleDisconnect = (event: Event) => {
      setIsListening(false);
      setEventCount(0);
      setStatus('Synth disconnected.');
      const customEvent = event as CustomEvent<{ portId: string }>;
      if (customEvent.detail?.portId === selectedPortId) {
        setSelectedPortId('');
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('midiDisconnected', handleDisconnect);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('midiDisconnected', handleDisconnect);
      }
      disconnectMidi();
    };
  }, [selectedPortId]);

  useEffect(() => {
    if (!isListening) return;

    const interval = window.setInterval(() => {
      const snapshot = getLiveMidiSnapshot();
      setEventCount(snapshot.eventCount);
      setStatus(`Listening - ${snapshot.eventCount} events`);
    }, 400);

    return () => {
      window.clearInterval(interval);
    };
  }, [isListening]);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!/\.(mid|midi)$/i.test(file.name)) {
      setError('Please upload a valid .mid or .midi file.');
      setStatus('Error: Invalid MIDI file.');
      setFileSummary(null);
      return;
    }

    setError(null);
    setIsParsing(true);
    setStatus('Parsing...');

    try {
      const summary = await parseMidiFile(file);
      setFileSummary(summary);

      if (summary.isEmpty) {
        setStatus('This MIDI file appears to be empty or contains only meta events.');
      } else if (summary.isLargeFile) {
        setStatus('File is large - sending a representative sample to AI.');
      } else {
        setStatus(`Parsed ${summary.trackCount} tracks at ${summary.bpm} BPM.`);
      }
    } catch (parseError) {
      const message = parseError instanceof Error ? parseError.message : 'Failed to parse MIDI file.';
      setError(message);
      setStatus(`Error: ${message}`);
      setFileSummary(null);
    } finally {
      setIsParsing(false);
    }
  };

  const handleSendFile = () => {
    if (!fileSummary) return;
    onMidiSend(fileSummary, midiMessage);
    setMidiMessage('');
    setStatus('MIDI context attached.');
  };

  const handleConnect = async () => {
    setError(null);

    try {
      const inputs = await requestMidiAccess();
      setLiveInputs(inputs);
      if (inputs.length === 0) {
        setStatus('No MIDI inputs found.');
      } else {
        setStatus('Select a MIDI input and start listening.');
      }
    } catch (connectError) {
      const message = connectError instanceof Error ? connectError.message : 'Failed to connect to MIDI.';
      setError(message);
      setStatus(`Error: ${message}`);
    }
  };

  const handleStartListening = () => {
    setError(null);

    if (!selectedPortId) {
      setStatus('Select a MIDI input first.');
      return;
    }

    try {
      connectToMidiInput(selectedPortId);
      setIsListening(true);
      setStatus('Listening - 0 events');
    } catch (listenError) {
      const message = listenError instanceof Error ? listenError.message : 'Failed to listen to MIDI.';
      setError(message);
      setStatus(`Error: ${message}`);
    }
  };

  const handleSendLive = () => {
    const snapshot = getLiveMidiSnapshot();
    onMidiSend(snapshot, midiMessage);
    setMidiMessage('');
    setStatus('Live MIDI snapshot attached.');
  };

  return (
    <section className={`midi-panel ${isOpen ? 'open' : ''}`}>
      {showToggle && (
        <button
          type="button"
          className="midi-panel-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          🎹 MIDI
        </button>
      )}

      {isOpen && (
        <div className="midi-panel-body">
          <div className="midi-panel-tabs">
            <button
              type="button"
              className={`midi-tab ${activeTab === 'file' ? 'active' : ''}`}
              onClick={() => setActiveTab('file')}
            >
              File
            </button>
            <button
              type="button"
              className={`midi-tab ${activeTab === 'live' ? 'active' : ''}`}
              onClick={() => setActiveTab('live')}
              disabled={!liveSupported}
            >
              Live
            </button>
          </div>

          {!liveSupported && (
            <p className="midi-note">
              Live MIDI requires Chrome or Edge. File upload still works!
            </p>
          )}

          {activeTab === 'file' && (
            <div className="midi-tab-panel">
              <label className="midi-file-input">
                <input
                  type="file"
                  accept=".mid,.midi"
                  onChange={handleFileChange}
                  disabled={isParsing}
                />
                <span>{isParsing ? 'Parsing...' : 'Choose MIDI file'}</span>
              </label>

              {fileSummary && (
                <div className="midi-preview">
                  <p><strong>Tracks:</strong> {fileSummary.trackCount}</p>
                  <p><strong>BPM:</strong> {fileSummary.bpm}</p>
                  <p><strong>Duration:</strong> {fileSummary.durationSeconds}s</p>
                  {fileSummary.truncated && (
                    <p className="midi-note">Note data truncated to 200 notes per track.</p>
                  )}
                </div>
              )}

              <button
                type="button"
                className="midi-action"
                onClick={handleSendFile}
                disabled={!fileSummary}
              >
                Send to AI
              </button>

              <label className="midi-message">
                <span>Add message for Melos</span>
                <input
                  type="text"
                  value={midiMessage}
                  onChange={(event) => setMidiMessage(event.target.value)}
                  placeholder="Ask about melody, harmony, feel, or arrangement..."
                />
              </label>
            </div>
          )}

          {activeTab === 'live' && (
            <div className="midi-tab-panel">
              {liveSupported && (
                <>
                  <button type="button" className="midi-action" onClick={handleConnect}>
                    Connect Synth
                  </button>

                  {liveInputs.length > 0 && (
                    <div className="midi-live-controls">
                      <select
                        value={selectedPortId}
                        onChange={(event) => setSelectedPortId(event.target.value)}
                      >
                        <option value="">Select a MIDI input</option>
                        {liveInputs.map((input) => (
                          <option key={input.id} value={input.id}>
                            {input.name}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        className="midi-action"
                        onClick={handleStartListening}
                        disabled={!selectedPortId}
                      >
                        Start Listening
                      </button>
                    </div>
                  )}

                  <div className="midi-live-status">
                    Listening events: {eventCount}
                  </div>
                  <button
                    type="button"
                    className="midi-action"
                    onClick={handleSendLive}
                    disabled={!isListening}
                  >
                    Send Snapshot to AI
                  </button>

                  <label className="midi-message">
                    <span>Add message for Melos</span>
                    <input
                      type="text"
                      value={midiMessage}
                      onChange={(event) => setMidiMessage(event.target.value)}
                      placeholder="Ask about melody, harmony, feel, or arrangement..."
                    />
                  </label>
                </>
              )}
            </div>
          )}

          <div className="midi-status">
            {error ? `Error: ${error}` : status}
          </div>
        </div>
      )}
    </section>
  );
}
