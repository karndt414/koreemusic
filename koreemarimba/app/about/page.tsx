export const metadata = { title: 'About - Koree Arndt Music' };

export default function About() {
  return (
    <div className="container">
      <main className="main-content">
        <h1>About Me</h1>
        <img
          src="/images/Koree-tough.jpg"
          alt="About Photo"
          style={{ float: 'left', marginRight: '20px', maxWidth: '200px', borderRadius: '10px' }}
        />

        <p>Hey! My name is Koree Arndt. I&apos;m a rising high school senior passionate about music and performance.</p>

        <p>With the Brownsburg Marching Band, I had the honor of reaching the Grand National Finals twice- performing &quot;Uninvited&quot; in 2022 and &quot;Pipe Dreams&quot; in 2023. I also marched in the Thanksgiving Macy&apos;s Day Parade with the band in 2021.</p>

        <p>In addition, I performed with the Brownsburg Winter Percussion, where we were finalists in the WGI World Class 2024 with the show &quot;Curated.&quot;</p>

        <p>Now, I live in Bentonville, Arkansas, where I continue to pursue my passion for music. I have again had the chance to perform at Grand National Finals with the show &quot;Sequ1nce&quot; in 2025. I've also composed and released my very first original works while here at Bentonville!</p>

        <h3>Achievements</h3>
        <ul>
          <li>ISSMA State Solos - Perfect Scores</li>
          <li>All-State Orchestra (Indiana) - Sophomore Year</li>
          <li>All-State Band (Arkansas) - Junior Year</li>
          <li>WGI World Class Finalist 2024</li>
        </ul>
      </main>
    </div>
  );
}
