import "./index.css";

export default function Home() {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content-container">
        <div className="hero-content-wrapper">
          <h1>Sravan Goud Mandala</h1>
          <p>
            With a desire to serve the public, I began my political career with
            the Congress party. Despite the hurdles at every turn, I stand
            before the people today as a devoted leader, carrying on without
            hesitation with the point of political welfare. I will be eternally
            thankful to my people who worked so hard to get to this point, as
            well as the officers who contributed to making it happen. I shall
            continue to strive for the common good.
          </p>
          <button type="button">Contact Me</button>
        </div>
      </div>
      <div className="hero-image-container">
        <img src="src/assets/hero-img.jpeg" alt="Profile picture" />
      </div>
    </section>
  );
}
