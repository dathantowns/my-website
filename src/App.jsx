import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import bgVideo from "./assets/bg-vid.mp4";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6500); // Show intro for 6.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return (
      <div className="intro-container">
        <video
          className="intro-video-background"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="intro-video-overlay"></div>
        <div className="intro-text">DATHAN</div>
      </div>
    );
  }

  return (
    <>
      {/* Video Background */}
      <video className="video-background" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="video-overlay"></div>

      <Header />
      <main>
        <section id="home">
          <Main />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
