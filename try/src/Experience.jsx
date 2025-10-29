import React from 'react';
import education from "./images/education.png"
export default function Experience() {
    // Array structure for easy mapping and clean rendering
    const experienceEntries = [
        {
            timeline: "06/2024 - 05/2025",
            role: "Junior Programmer",
            institute: "Immersive and Interactive Technology Lab, CURIN – Chitkara University",
            type: [
                "Worked on AR/VR projects",
                "Developed 10+ Unity-based applications",
                "Wrote 5+ research papers in immersive technology & AI"
            ]
        },
        {
            timeline: "05/2025 – 08/2025",
            role: "Technical Artist Intern",
            institute: "Quriousbit Games",
            type: [
                "2D Game Development",
                "Created animations and visual effects",
                "Produced marketing videos & graphics",
                "Marketing and promotional activities"
            ]
        },
    ];

    return (
        // Main container for the Experience page content
        <div className="min-h-screen text-white p-8">

            {/* Main Content Container: Centered, responsive, and REVERSED layout on large screens */}
            <div className="flex flex-col lg:flex-row-reverse max-w-6xl mx-auto pt-16 lg:pt-24 gap-12">

                {/* 1. Right Section (Timeline Content) 
                     - Now styled to take up 2/3 and aligned to the right.
                */}
                <div className="right lg:w-2/3 space-y-12 ml-auto">

                    {/* Section Title - Text Aligned Right on large screens */}
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-center lg:text-right">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-[0_0_10px_rgba(165,180,252,0.6)]">
                            Work Experience
                        </span>
                    </h1>

                    {/* Experience Timeline Container 
                      - border-r-2: Changed to right border.
                      - pr-6: Changed to right padding.
                    */}
                    <div className="relative border-r-2 border-indigo-400/50 space-y-12 pr-6">

                        {experienceEntries.map((entry, index) => (
                            <div key={index} className="Experience-phase relative group">

                                {/* Timeline Dot/Marker 
                                  - -right-2.5: Changed from left to right positioning.
                                  - group-hover:-right-3.5: Hover state adjusted to right.
                                */}
                                {/* <div className="absolute w-5 h-5 rounded-full bg-indigo-500 -right-2.5 top-0 
                                                shadow-lg shadow-indigo-500/50 
                                                transition-all duration-300 ease-in-out
                                                group-hover:w-7 group-hover:h-7 group-hover:-right-3.5 group-hover:shadow-indigo-400/80">
                                </div> */}

                                {/* Timeline Date - Text Aligned Right */}
                                <div className="Experience-Timeline text-sm text-gray-400 font-medium italic mb-2 text-right">
                                    {entry.timeline}
                                </div>

                                {/* Experience Details Box - No changes needed here for alignment */}
                                <div className="p-5 rounded-lg bg-gray-900/40 border border-indigo-500/30
                                                transition-all duration-300 ease-in-out 
                                                group-hover:bg-gray-800/60 group-hover:border-indigo-400/60 group-hover:shadow-xl group-hover:shadow-indigo-500/30">

                                    {/* Role (Highlighted) - Text Aligned Right */}
                                    <div className="Experience-role text-2xl font-bold block text-indigo-300 drop-shadow-[0_0_5px_rgba(165,180,252,0.4)] text-right">
                                        {entry.role}
                                    </div>

                                    {/* Institute - Text Aligned Right */}
                                    <div className="Experience-Institute text-lg text-purple-300 block mt-1 mb-3 text-right">
                                        {entry.institute}
                                    </div>

                                    {/* Experience Type (List of responsibilities) - List items stay left-aligned for readability */}
                                    <div className="Experience-type space-y-1 text-gray-200 text-base">
                                        <ul className="list-disc pl-5 space-y-1">
                                            {entry.type.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Left Section (Graphic/Visualization) 
                     - Now styled to take up 1/3 and serve as the negative space/visual anchor.
                */}
                <div className="left lg:w-1/3 mt-12 lg:mt-0 flex justify-center lg:justify-end">
                    {/* Placeholder for a relevant graphic (e.g., stylized gear, circuit board) */}
                    <div className="w-full max-w-md aspect-square flex items-center justify-center ">
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