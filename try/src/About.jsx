import React from 'react';
import amitesh from './images/amitesh.png'
import resume from "./images/resume.pdf"
// NOTE: I am replacing the unused 'div' import with 'React'
// You might need to change 'div' to 'React.div' or use an external library for motion effects.
// For now, I'll use standard <div> elements.

export default function About() {
    return (
        // Main container for the About page content
        // min-h-screen for full height, text-white for text color, p-8 for padding
        <div className="min-h-screen text-white p-8">

            {/* Header Tagline (Visible in the image) */}
            <p className="text-purple-400 text-lg font-medium tracking-wider text-center pt-8">
            </p>

            {/* Container for the main content (Left Text/Buttons + Right Image) */}
            {/* flex: enables flexbox. max-w-6xl mx-auto: centers and limits width. */}
            {/* pt-16 lg:pt-24: adds padding from the top */}
            <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto pt-16 lg:pt-24 gap-12">

                {/* Left Section: Text and Buttons (Takes 2/3 of space on large screens) */}
                <div className="left lg:w-2/3 text-center lg:text-left space-y-6">

                    {/* Hello, I'm... */}
                    <div className="intro space-y-2">
                        <span className="text-white text-4xl sm:text-5xl font-semibold block">
                            Hello, I'm
                        </span>

                        {/* Name with Gradient/Neon Effect */}
                        <div className="intro-name">
                            {/* Combined name into a single span for the gradient effect seen in the image */}
                            <span className="text-5xl sm:text-7xl font-extrabold block">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-[0_0_10px_rgba(165,180,252,0.6),_0_0_20px_rgba(192,132,252,0.4)]">
                                    Amitesh Aggarwal
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Profession */}
                    <div className="Profession text-2xl sm:text-3xl text-gray-400 font-light pt-2">
                    </div>

                    {/* Description */}
                    <div className="Profession-Description text-gray-300 max-w-lg lg:max-w-xl text-base sm:text-lg pt-4 leading-relaxed">
                        {/* Note: I'm keeping your original description content */}
                        I'm Amitesh Aggarwal, a passionate Computer Science Engineering student and AR/VR/Game Developer dedicated to immersive technologies and educational innovation. With expertise in Unity, AR/VR/MR, Cocos Creator, UI/UX, and app development, I’ve built 10+ projects and authored research papers. I previously worked as a Technical Artist Intern at Qurious Bit Games and an Intern at IITL (CURIN), Chitkara University. Skilled in C#, TypeScript, HTML, CSS, C, C++, Python, Java, Adobe After Effects, MS Excel, and communication, I strive to blend creativity and technology to craft impactful, real-world solutions.
                    </div>

                    {/* Action Buttons (Icons) */}
                    <div className="Icons flex gap-4 pt-8 justify-center lg:justify-start">
                        {/* Download CV Button */}
                        <span className="CV">
                            <a
                                href={resume}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 
                                           text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 text-lg
                                           drop-shadow-[0_0_8px_rgba(165,180,252,0.5)] hover:drop-shadow-[0_0_15px_rgba(165,180,252,0.9)]
                                           hover:scale-[1.02] active:scale-[0.98]" download
                            >
                                Download CV
                            </a>
                        </span>

                        {/* View Projects Link */}
                        <span className="Projects">
                            <a
                                href="#"
                                className="flex items-center text-purple-400 hover:text-purple-300 transition duration-300 text-lg group
                                           drop-shadow-[0_0_5px_rgba(192,132,252,0.3)] hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.7)]"
                            >
                                &lt; View Projects /&gt;
                            </a>
                        </span>
                    </div>
                </div>

                {/* Right Section: Animated Image/Graphic (Takes 1/3 of space on large screens) */}
                <div className="right lg:w-1/3 mt-12 lg:mt-0 flex justify-center">
                    {/* Placeholder for the large central image/animation */}
                    <div className="w-full max-w-md aspect-square flex items-center justify-center">
                        <div
                            className="relative w-96 h-96 rounded-full border-2 border-purple-500/50 
                                       shadow-2xl shadow-purple-900 
                                       flex items-center justify-center overflow-hidden
                                       animate-pulse-slow 
                                       "
                            // Added animation and strong neon glow for visual effect
                            style={{
                                animation: 'pulse-glow 5s infinite alternate',
                                boxShadow: '0 0 50px rgba(192, 132, 252, 0.7), 0 0 100px rgba(165, 180, 252, 0.5)'
                            }}
                        >
                            {/* Inner Digital Human Head Graphic Approximation */}
                            <div
                                className={`absolute inset-4 rounded-full bg-gray-900/50 flex items-center justify-center bg-[url('${amitesh}')] z-40`}
                            //                                                                                      ^^^^^^^^^^^^^^^^
                            >
                                <img
                                    src={amitesh}
                                    alt="Amitesh" // Always provide a meaningful alt text for accessibility
                                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

// Note: If you need to define the 'pulse-glow' animation, you'd add it to your index.css:
/*
@keyframes pulse-glow {
  0% { box-shadow: 0 0 50px rgba(192, 132, 252, 0.7), 0 0 100px rgba(165, 180, 252, 0.5); transform: scale(1); }
  100% { box-shadow: 0 0 70px rgba(192, 132, 252, 0.9), 0 0 120px rgba(165, 180, 252, 0.7); transform: scale(1.02); }
}
*/