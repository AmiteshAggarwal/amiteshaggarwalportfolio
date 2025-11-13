import { useState } from "react";
import LiquidEther from "./components/liquid";
import Home from "./page";
import Homepage from "./homepage";
import "./index.css";
import Navbar from "./Navbar";
import Particles from "./components/particles";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Portfolio from "./Portfolio";
import ContactContent from "./contact";

function App() {
  return (
    <>
      {/* Navbar stays fixed on top */}
      <Navbar />

      {/* HOME SECTION */}
      <section style={{ width: "100%", minHeight: "100vh", position: "relative" }}>

        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        >
          <Home/>
        </LiquidEther>

      </section>

      {/* REMAINING SECTIONS */}
      <div className="bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950">

        {/* HOMEPAGE SECTION */}
        <section id="home" style={{ width: "100%", height: "100%", position: "relative" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          >
            <Homepage />
          </Particles>
        </section>

        {/* ABOUT + EDUCATION + EXPERIENCE SECTION */}
        <section id="about" style={{ width: "100%", height: "100%", position: "relative" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          >
            <About />
          </Particles>
        </section>
        <section id="education" style={{ width: "100%", height: "100%", position: "relative" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={800}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          >
            <Education />
          </Particles>
        </section>
        <section id="experience" style={{ width: "100%", height: "100%", position: "relative" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={800}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          >
            <Experience />
          </Particles>
        </section>


        {/* PORTFOLIO + CONTACT SECTION */}
        <section id="portfolio" style={{ width: "100%", height: "100%", position: "relative" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={600}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          >
            <Portfolio />
          </Particles>
        </section>
        <section id="contactus" style={{ width: "100%", height: "100%", position: "relative" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={600}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          >
            <ContactContent />
          </Particles>
        </section>

      </div>
    </>
  );
}

export default App;
