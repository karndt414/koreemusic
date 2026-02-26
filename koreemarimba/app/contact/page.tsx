'use client';
import { useState, FormEvent } from 'react';
import { usePageVisitor } from '@/lib/usePageVistor';

export default function Contact() {
  usePageVisitor('/contact');
  const [status, setStatus] = useState({ message: '', color: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: 'Sending your message...', color: '#666' });

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ message: "✓ Message sent successfully! I'll get back to you soon.", color: '#28a745' });
        form.reset();
      } else {
        setStatus({ message: '✗ Failed to send message. Please try again.', color: '#dc3545' });
      }
    } catch {
      setStatus({ message: '✗ An error occurred. Please try again.', color: '#dc3545' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <main className="main-content">
        <h1>Contact Me</h1>
        <p>If you&apos;d like to reach out for collaborations, licensing, or questions, feel free to contact me below:</p>

        <p><strong>Email:</strong> <a href="mailto:koree.marimba@gmail.com">koree.marimba@gmail.com</a></p>

        <hr />

        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px' }} required />
          </p>
          <p>
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px' }} required />
          </p>
          <p>
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" rows={5} style={{ width: '100%', padding: '8px' }} required></textarea>
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{ background: '#333', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <p style={{ marginTop: '10px', color: status.color }}>{status.message}</p>
          )}
        </form>
      </main>
    </div>
  );
}
