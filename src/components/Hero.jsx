import "./Hero.css";
import bgVideo from "../assets/background.mp4"; // your video file

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background video: plays again and again */}
      <video
        className="hero__video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Light layer on top of the video so the text stays readable */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Heading + subheading */}
      <div className="hero__content">
        <h1 className="hero__title">
          <span>Make your brand</span>
          <span>impossible to ignore.</span>
        </h1>
        <p className="hero__subtitle">
          From social media to search engines, we help your business stand out
          in a crowded digital world.
        </p>
      </div>
    </section>
  );
}

export default Hero;