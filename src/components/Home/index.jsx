import "./index.css";

export default function Home() {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content-container">
        <div className="hero-content-wrapper">
          <p>Hello, this is</p>
          <h1 className="hero-title">Sravan Goud Mandala</h1>
          <p className="hero-description">
            I started my political career with the Congress party, aiming to
            serve the public. Despite facing challenges, I stand before you
            today as a dedicated leader. I am thankful to the people and
            officers who supported me. I will keep working for the common good.
          </p>
          <div className="hero-buttons">
            <button type="button" className="hero-btn contact-me-btn">
              <a href="#contact">Contact Me</a>
            </button>
            {/* <button type="button" className="hero-btn know-more-btn">
              <a href="#about">Know more</a>
            </button> */}
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img
          src="https://res.cloudinary.com/dwddin0nz/image/upload/v1705566327/hero-img_vxkxqq.jpg"
          alt="Profile picture"
        />
      </div>
    </section>
  );
}
