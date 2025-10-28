import React from 'react';
import education from "./images/experience.png"
// NOTE: I am replacing the unused 'div' import with 'React'
// Using standard <div> elements.

export default function Education() {
    // Array structure for easy mapping and clean rendering
    const educationEntries = [
        {
            timeline: "10/2022 - 06/2026 (Expected)",
            degree: "B.E Computer Science and Engineering",
            institution: "Chitkara University, Rajpura, Punjab"
        },
        {
            timeline: "04/2021 - 03/2022",
            degree: "Senior Secondary Education (12th Grade)",
            institution: "Atam Vallabh Public School, Fazilka"
        },
        {
            timeline: "04/2019 - 03/2020",
            degree: "Secondary Education (10th Grade)",
            institution: "Army Public School, Fazilka"
        },
    ];

    return (
        // Main container for the Education page content
        // Assuming dark background is set externally, text-white for visibility
        <div className="min-h-screen text-white p-8">
            
            {/* Main Content Container: Centered and responsive layout */}
            <div className="flex flex-col lg:flex-row max-w-6xl mx-auto pt-16 lg:pt-24 gap-12">
                
                {/* Left Section: Timeline/Education Phases */}
                <div className="left lg:w-2/3 space-y-12">
                    
                    {/* Section Title (Styled similarly to previous pages) */}
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-center lg:text-left">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-[0_0_10px_rgba(165,180,252,0.6)]">
                            My Education
                        </span>
                    </h1>
                    
                    {/* Education Timeline Container */}
                    <div className="relative border-l-2 border-purple-500/50 space-y-10 pl-6">
                        
                        {educationEntries.map((entry, index) => (
                            <div key={index} className="Education-phase relative group">
                                
                                {/* Timeline Dot/Marker */}
                                {/* <div className="absolute w-4 h-4 rounded-full bg-purple-500 -left-3 top-0 
                                                shadow-lg shadow-purple-500/50 
                                                transition-all duration-300 ease-in-out
                                                group-hover:w-6 group-hover:h-6 group-hover:-left-3 group-hover:shadow-purple-400/80">
                                </div> */}
                                
                                {/* Timeline Date */}
                                <div className="Education-Timeline text-sm text-gray-400 font-medium italic mb-2">
                                    {entry.timeline}
                                </div>
                                
                                {/* Education Entity/Details */}
                                <div className="Education-entity p-4 rounded-lg bg-gray-900/40 border border-purple-500/30
                                                transition-all duration-300 ease-in-out 
                                                group-hover:bg-gray-800/60 group-hover:border-purple-400/60 group-hover:shadow-md group-hover:shadow-purple-500/30">
                                    
                                    {/* Degree/Program (Highlighted) */}
                                    <span className="text-xl font-bold block text-purple-300 drop-shadow-[0_0_5px_rgba(192,132,252,0.4)]">
                                        {entry.degree}
                                    </span>
                                    
                                    {/* Institution */}
                                    <span className="text-base text-gray-200 block mt-1">
                                        {entry.institution}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Right Section: Graphic/Visualization (Takes 1/3 of space on large screens) */}
                <div className="right lg:w-1/3 mt-12 lg:mt-0 flex justify-center lg:justify-start">
                    {/* Placeholder for a relevant tech graphic, perhaps a stylized university logo or brain network */}
                    <div className="w-full max-w-md aspect-square flex items-center justify-center  ml-10">
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
                                                   className={`absolute inset-4 rounded-full bg-gray-900/50 flex items-center justify-center  z-40`}
                                               //                                                                                      ^^^^^^^^^^^^^^^^
                                               >
                                                   <img
                                                       src={education}
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