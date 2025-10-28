import TextType from "./components/TextType"
import React from 'react';
import robo from "./images/robo.png"

export default function Homepage() {

  // Redefine social data using simple emojis/text for maximum clickability
  const socialLinksData = [
    {
      label: 'LinkedIn',
      icon: <iconify-icon className="bg-blue-500 p-2 text-white rounded" icon="entypo-social:linkedin" width="20" height="20"></iconify-icon>, // Unicode character
      link: "https://www.linkedin.com/in/amitesh-aggarwal-834969258/"
    },
    {
      label: 'Instagram',
      icon: <iconify-icon icon="skill-icons:instagram" width="34" height="34"></iconify-icon>, // Unicode character
      link: "https://www.instagram.com/amiteshaggarwal"
    },
    {
      label: 'Gmail',
      icon: <iconify-icon icon="skill-icons:gmail-light" width="30" height="30"></iconify-icon>, // Unicode character
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=amiteshaggarwal9948@gmail.com&su=Subject&body=BodyText"
    }
  ];

  return (
    <div className=" text-white p-8">
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto pt-16 lg:pt-0">

        {/* Left Section: Text and Buttons (relative z-10 for stacking context) */}
        <div className="left lg:w-2/3 text-center lg:text-left space-y-6 relative z-30">

          {/* Main Profession/Role Title (relative z-20) */}
          <div className="profession_main text-5xl sm:text-7xl font-extrabold leading-tight relative z-20">
            <span className="text-white block drop-shadow-[0_0_10px_rgba(255,255,255,0.4),_0_0_20px_rgba(255,255,255,0.2)]">
              Unity
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 block drop-shadow-[0_0_10px_rgba(165,180,252,0.6),_0_0_20px_rgba(192,132,252,0.4)]">
              Developer
            </span>
          </div>

          {/* Interest/Secondary Role */}
          <div className="interest text-xl sm:text-2xl text-gray-400 font-light">
            <TextType
              text={["AR/VR/Game/App Developer", "Researcher"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          {/* Description */}
          <div className="profession_description text-gray-300 max-w-md lg:max-w-none text-base sm:text-lg">
            Creating innovative, interactive, and user-friendly AR/VR experiences, games, and applications for digital solutions and technology research.
          </div>

          {/* Skills/Technologies with neon borders and text and hover effect */}
          <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
            {['Unity', 'C#',].map((skill) => (
              <span
                key={skill}
                className="px-4 py-1 text-sm font-semibold rounded-full 
                          border border-purple-500 text-purple-300 
                          transition duration-300 cursor-pointer
                          drop-shadow-[0_0_4px_rgba(192,132,252,0.5)] 
                          hover:bg-purple-900 hover:border-indigo-400 
                          hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]
                          hover:scale-[1.03]"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Socials - CRITICAL FIX: High Z-index ensures links are on top of all visual effects */}
          <div className="socials flex gap-6 pt-8 ml-2 text-gray-400 justify-center lg:justify-start text-3xl z-30">
            {socialLinksData.map((social) => (
              <a
                key={social.label}
                href={social.link}
                aria-label={social.label}
                // Applied z-50 to ensure the link is absolutely clickable
                className="hover:text-purple-400 transition inline-flex relative z-50 p-1 
                          drop-shadow-[0_0_3px_rgba(192,132,252,0.1)] 
                          hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)] 
                          hover:text-purple-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Right Section: Image Placeholder */}
        <div className="right lg:w-1/3 mt-12 lg:mt-0 flex justify-center">
          <div className="w-full max-w-md aspect-square flex items-center justify-center">
            <div
              className="relative w-80 h-80 rounded-full border-2 border-purple-500/50 
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
                className={`absolute inset-4 rounded-full bg-gray-900/50 flex items-center justify-center  z-40`}
              //                                                                                      ^^^^^^^^^^^^^^^^
              >
                <img
                  src={robo}
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