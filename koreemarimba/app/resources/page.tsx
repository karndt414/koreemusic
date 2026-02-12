export const metadata = { title: 'Resources - Koree Arndt Music' };

export default function Resources() {
  return (
    <div className="container">
      <main className="main-content">
        <h1>Resources</h1>
        <p>Here are some helpful resources for percussionists and musicians.</p>

        <h3>Practice Tips</h3>
        <ul>
          <li>Start slow and use a metronome</li>
          <li>Break difficult passages into small chunks</li>
          <li>Record yourself and listen back</li>
          <li>Set specific goals for each practice session</li>
        </ul>

        <h3>Useful Links</h3>
        <ul>
          <li><a href="https://www.youtube.com/@Koreearndt414/videos" target="_blank" rel="noopener noreferrer">My YouTube Channel</a></li>
        </ul>
      </main>

      <aside className="sidebar">
        <h3>Quick Links</h3>
        <p>More resources coming soon!</p>
        <hr />
        <p>
          <img src="/images/artist-photo.jpg" alt="Percussion setup" style={{ opacity: 0.8, borderRadius: '5px' }} />
        </p>
      </aside>
    </div>
  );
}
