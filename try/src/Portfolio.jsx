import { useState } from 'react';
import cert1 from './images/certificate1.jpg';
import cert2 from './images/certificate2.jpg';
import cert3 from './images/certificate3.jpg';
import cert4 from './images/certificate4.jpg';
import cert5 from './images/certificate5.jpg';
import cocos from './images/cocos-creator.jpg';
import photoshop from "./images/photoshop.jpg";
import adobeafter from "./images/adobe-after.jpg";
import photo from "./images/photo-pea.jpg";
import rp1 from "./images/chapter5.webp";
import rp2 from "./images/chapter15.jpg";
import rp3 from "./images/RP1.jpeg"
import rp4 from "./images/RP2.jpeg"
import rp5 from "./images/RP3.jpeg"
import rp6 from "./images/RP4.jpeg"
import mentalcare from './images/mentalcare.jpg'
import truthdare from './images/truth.jpg'
import most from './images/most.jpg'
import would from './images/would.jpg'
import never from './images/never.jpg'
import roll from './images/roll.jpg'
import tomato from './images/tomato.jpg'
import boxblast from "./images/boxblast.jpg"
import gocar from "./images/gocar.jpg"
import escapemat from "./images/escapemat.jpg"
import hunter from "./images/hunter.jpg"
import jumpingboy from "./images/jumpingboy.jpg"
import wr1 from "./images/WR1.jpeg"
import wr2 from "./images/WR2.jpeg"
import wr3 from "./images/WR3.jpeg"
import wr4 from "./images/WR4.jpeg"
import wr5 from "./images/WR5.jpeg"
import wr6 from "./images/WR6.jpeg"
import wr12 from "./images/WR7.jpeg"
import wr8 from "./images/WR8.jpeg"
import wr9 from "./images/WR9.jpeg"
import wr10 from "./images/WR10.jpeg"
import wr11 from "./images/WR11.jpeg"
import wr7 from "./images/WR12.jpeg"

import { img } from 'motion/react-client';


// ==========================================================
// RESEARCH PAPER CONTENT COMPONENT
// ==========================================================
const ResearchPaperContent = () => {
  // NOTE: Assuming rp1 and rp2 are imported image assets.
  const research = [
    {
      src: rp1,
      title: "Chapter 5, Internet of Things Storage Issues and Challenges, by Amitesh Aggarwal, Priyanka Datta, Neha Garg, Amanpreet Kaur, and Yonis Gulzar, examines the storage challenges of IoT. It highlights the need for scalable and secure storage for the large volumes of data generated, focusing on smart cities and healthcare, where real-time adaptability, accuracy, and data security are critical for effective IoT integration.",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003535126-5/internet-things-storage-issues-challenges-amitesh-aggarwal-priyanka-datta-neha-garg-amanpreet-kaur-yonis-gulzar", // Added link property
      icon: "🎓"
    },
    {
      src: rp2,
      title: "Chapter 15 of the book Healthcare Frontiers in the Metaverse, titled Case Study, Future Scope, and Vision of Metaverse in Healthcare, explores the role of metaverse technologies in healthcare through case studies and future perspectives. Amitesh Aggarwal contributed as the 3rd author alongside Dr. Priyanka Datta, Neha Garg, and Dr. Amanpreet Kaur. This work reflects a collaborative research effort and the guidance and support of mentors and co-authors.",
      link: "https://shop.elsevier.com/books/healthcare-frontiers-in-the-metaverse/rani/978-0-443-32998-2", // Added link property
      icon: "🏆"
    },
    {
      src: rp3,
      title: "Chapter 3 of the book, titled *Innovating Securely: 6G and IoT for Immersive Futures*, explores the convergence of 6G, the Internet of Things (IoT), and immersive technologies, with a strong focus on security, privacy, and trustworthy digital ecosystems. Amitesh Aggarwal contributed as the 3rd author alongside Neha Garg, Dr. Priyanka Datta, Dr. Amanpreet Kaur, and Yonis Gulzar.",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003586456-3/innovating-securely-neha-garg-priyanka-datta-amitesh-aggarwal-amanpreet-kaur-yonis-gulzar", // Added link property
      icon: "🏆"
    },
    {
      src: rp4,
      title: "This chapter explores the integration of Machine Learning (ML) with the Internet of Things (IoT), focusing on how intelligent models can process vast amounts of IoT-generated data to identify patterns, predict outcomes, detect anomalies, optimize devices, and enable automated decision-making. ",
      link: "https://onlinelibrary.wiley.com/doi/10.1002/9781394370702.ch3", // Added link property
      icon: "🏆"
    },
    {
      src: rp5,
      title: "Chapter 5 of the book, titled *Deep Generative Learning: Foundations and Case Studies in Medical Image Processing*, explores the foundations of deep generative learning and its applications in medical image processing. The chapter examines advanced generative models and their role in medical image generation, enhancement, reconstruction, segmentation, and analysis, supported by relevant case studies and practical applications. ",
      link: "https://www.degruyterbrill.com/document/doi/10.1515/9783112226223/html", // Added link property
      icon: "🏆"
    },
    {
      src: rp6,
      title: "An AI-Driven Game Analyst Framework for Intelligent Player Analysis in a Unity-Based Roll Ball Environment explores the integration of Artificial Intelligence (AI) and Machine Learning (ML) into game analytics to evaluate player performance and gameplay behavior. The work utilizes gameplay data collected from a Unity-based Roll Ball environment and applies machine learning models to analyze player scores and classify players into different performance tiers.",
      link: "https://www.impaxon.com/computics/2/2", // Added link property
      icon: "🏆"
    },
  ];


  return (
    <div className="min-h-screen py-8 ">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold whitespace-nowrap 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-indigo-400 to-purple-500 
        drop-shadow-[0_0_8px_rgba(165,180,252,0.6)]
        hover:drop-shadow-[0_0_15px_rgba(165,180,252,1)]
        transition-all duration-300">
          MY RESEARCH-PAPERS
        </h2>
        <p className="text-base text-gray-300 mt-2">
          Scroll to see them stack! ✨
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative px-4 md:px-8" style={{ paddingBottom: '180vh' }}>
        {research.map((cert, index) => {
          const stickyTop = 64 + Math.min(index * 16, 120); // cap growth so late cards don't run out of room
          const cardMaxHeight = `calc(100dvh - ${stickyTop}px - 24px)`; // always fits below its own top

          return (
            <div
              key={index}
              className="certificate-card sticky w-full max-w-5xl mx-auto bg-purple-950 rounded-2xl shadow-2xl overflow-hidden mb-20 md:mb-96 h-[520px] sm:h-[480px] md:h-96"
              style={{
                top: `${stickyTop}px`,
                maxHeight: cardMaxHeight,
                zIndex: 100 + index,
              }}
            >
              <div className="flex flex-col md:flex-row h-full">

                {/* LEFT SIDE: Image/Visual */}
                <div className="relative w-full h-52 sm:h-56 md:w-1/3 md:h-full flex-shrink-0 bg-white flex items-center justify-center p-2">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

                  {/* Index overlay */}
                  <div className="absolute bottom-1 left-1">
                    <div className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                      {index + 1} of {research.length}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: Text/Content & Link Button (Increased Height/Padding) */}
                <div className="p-5 md:p-10 md:w-2/3 flex-1 flex flex-col min-h-0">
                  {/* Scrollable text container with mobile-specific max-height */}
                  <div className="overflow-y-auto mb-4 pr-2 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-900/20 flex-1">
                    <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
                      {cert.title}
                    </p>
                  </div>

                  {/* Button stays at bottom */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm md:text-base font-semibold rounded-full shadow-lg transition duration-200 flex items-center gap-2 flex-shrink-0"
                  >
                    <iconify-icon icon="line-md:external-link" width="20" height="20"></iconify-icon>
                    View Paper
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {/* <div className="text-center pb-12 px-4">
        <p className="text-xl text-white font-semibold">
          All achievements complete! 🎉
        </p>
      </div> */}

      <style jsx>{`
        /* CSS remains the same to keep the scroll-stacking effect */
        @keyframes stackBlur {
          from {
            filter: blur(0px);
            transform: scale(1);
          }
          to {
            filter: blur(10px);
            transform: scale(0.90);
          }
        }

        .certificate-card {
          animation: stackBlur linear forwards;
          animation-timeline: view();
          animation-range: cover 100% exit 100%;
          transform-origin: top center;
        }

        @supports not (animation-timeline: view()) {
          .certificate-card {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};
// ==========================================================
// CERTIFICATES CONTENT COMPONENT
// ==========================================================
const CertificatesContent = () => {
  const certificates = [
    {
      src: wr1,
      title: "Awarded for completing one year of dedicated work and valuable contributions at IITL (CURIN), Chitkara University.",
      icon: "🎓"
    },
    {
      src: wr2,
      title: "Received for outstanding involvement and support in successfully delivering a funded project at IITL (CURIN), Chitkara University.",
      icon: "🏆"
    },
    {
      src: wr3,
      title: "Recognised for volunteering as an organiser and helping ensure the smooth execution of the cultural event Banger 2024-2025.",
      icon: "🎉"
    },
    {
      src: wr4,
      title: "Awarded the Certificate of Excellence for successfully completing the Introduction to Python course from Coding Ninjas",
      icon: "🐍"
    },
    {
      src: wr5,
      title: "Awarded a Certificate of Appreciation for delivering absolute performance and remarkable problem-solving skills in the Hackathon HTM 4.0",
      icon: "💻"
    },
    {
      src: wr6,
      title: "Awarded a Certificate of Appreciation for delivering absolute performance and remarkable problem-solving skills in the Hackathon HTM 4.0",
      icon: "💻"
    },
    {
      src: wr7,
      title: "Awarded a Certificate of Appreciation for delivering absolute performance and remarkable problem-solving skills in the Hackathon HTM 4.0",
      icon: "💻"
    },
    {
      src: wr8,
      title: "Awarded a Certificate of Appreciation for delivering absolute performance and remarkable problem-solving skills in the Hackathon HTM 4.0",
      icon: "💻"
    },
    {
      src: wr9,
      title: "Awarded a Certificate of Appreciation for delivering absolute performance and remarkable problem-solving skills in the Hackathon HTM 4.0",
      icon: "💻"
    },
    {
      src: wr10,
      title: "Awarded a Certificate of Appreciation for delivering absolute performance and remarkable problem-solving skills in the Hackathon HTM 4.0",
      icon: "💻"
    },
    {
      src: wr11,
      title: "Awarded a Certificate of Appreciation for delivering absolute performance and remarkable problem-solving skills in the Hackathon HTM 4.0",
      icon: "💻"
    },
    {
      src: wr12,
      title: "Awarded a Certificate of Appreciation for delivering absolute performance and remarkable problem-solving skills in the Hackathon HTM 4.0",
      icon: "💻"
    },
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold whitespace-nowrap 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-indigo-400 to-purple-500 
        drop-shadow-[0_0_8px_rgba(165,180,252,0.6)]
        hover:drop-shadow-[0_0_15px_rgba(165,180,252,1)]
        transition-all duration-300">
          MY WRITINGS
        </h2>
        <p className="text-base text-gray-300 mt-2">
          Scroll to see them stack! ✨
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative px-4 md:px-8" style={{ paddingBottom: '220vh' }}>
        {certificates.map((cert, index) => {
          const stickyTop = 80 + Math.min(index * 14, 120);
          const cardMaxHeight = `calc(100dvh - ${stickyTop}px - 24px)`;

          return (
            <div
              key={index}
              className="certificate-card w-full max-w-2xl mx-auto bg-purple-950 rounded-2xl shadow-2xl overflow-hidden mb-24 sm:mb-32 md:mb-96 h-auto"
              style={{
                position: 'sticky',
                top: `${stickyTop}px`,
                maxHeight: cardMaxHeight,
                zIndex: 100 + index,
              }}
            >
              <div className="relative w-full h-auto max-h-[inherit] overflow-hidden p-1 sm:p-2 md:p-4 bg-purple-950 flex items-center justify-center">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-auto max-h-[inherit] object-contain rounded-xl block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                {/* <div className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                  {cert.icon}
                </div> */}
                <div className="absolute bottom-3 left-3">
                  <div className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                    {index + 1} of {certificates.length}
                  </div>
                </div>
              </div>

              {/* <div className="p-6 md:p-8">
                <p className="text-base md:text-lg text-white leading-relaxed">
                  {cert.title}
                </p>
              </div> */}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {/* <div className="text-center pb-12 px-4">
        <p className="text-xl text-white font-semibold">
          All achievements complete! 🎉
        </p>
      </div> */}

      <style jsx>{`
        @keyframes stackBlur {
          from {
            filter: blur(0px);
            transform: scale(1);
          }
          to {
            filter: blur(10px);
            transform: scale(0.90);
          }
        }

        .certificate-card {
          animation: stackBlur linear forwards;
          animation-timeline: view();
          animation-range: cover 100% exit 100%;
          transform-origin: top center;
        }

        @supports not (animation-timeline: view()) {
          .certificate-card {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

// ==========================================================
// RENDER PROJECTS CONTENT
// ==========================================================
// ==========================================================
// RENDER PROJECTS CONTENT
// ==========================================================
// ==========================================================
// RENDER PROJECTS CONTENT
// ==========================================================

// ==========================================================
// RENDER PROJECTS CONTENT
// ==========================================================
const renderProjectsContent = () => (
  <div className="flex flex-col gap-24 p-8 relative">

    {/* Mobile-Based Projects Section */}
    <section className="relative pt-12">
      <h2 className="absolute -top-4 sm:-top-5 md:-top-6 left-1/2 transform -translate-x-1/2 z-20 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-[0_0_8px_rgba(165,180,252,0.6)] hover:drop-shadow-[0_0_15px_rgba(165,180,252,1)] transition-all duration-300">
        MOBILE-BASED PROJECTS
      </h2>

      <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <a href="/mentalcarewebgl/index.html" target='_blank' rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={mentalcare} alt="MentalCare App" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">MentalCare is a mobile app that helps users explore their mental well-being by answering simple, guided questions. Discover insights into different mental health areas and track your emotional balance anytime, anywhere.</span>
            </div>
          </a>

          <a href="/truthordarewebgl/index.html" target='_blank' rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={truthdare} alt="Truth or Dare Game" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">Truth or Dare is a fun mobile game for 2 to 9 players, packed with exciting truth and daring challenges. Perfect for parties or hangouts, it keeps everyone laughing and on edge with every turn!</span>
            </div>
          </a>

          <a href="/mostlikelytowebgl/index.html" target='_blank' rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={most} alt="Most Likely To Game" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">Most Likely To is a fun mobile party game filled with hilarious and thought-provoking questions. Play with friends and find out who's most likely to do what — laughter guaranteed every round!</span>
            </div>
          </a>

          <a href="/wouldyouratherwebgl/index.html" target='_blank' rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={would} alt="Would You Rather Game" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">Would You Rather is a fun mobile game that challenges players with tricky and hilarious choices. Pick between two options and see how your friends decide — perfect for endless laughs and debates!</span>
            </div>
          </a>

          <a href="/neverhaveieverwebgl/index.html" target='_blank' rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={never} alt="Never Have I Ever Game" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">Never Have I Ever is a classic mobile party game packed with funny, daring, and revealing questions. Play with friends to uncover secrets, share laughs, and see who's done what!</span>
            </div>
          </a>

        </div>
      </div>
    </section>

    {/* PC-Based Projects Section */}
    <section className="relative pt-12 mt-10">
      <h2 className="absolute -top-6 sm:-top-7 md:-top-8 lg:-top-10 left-1/2 transform -translate-x-1/2 z-20 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-[0_0_8px_rgba(165,180,252,0.6)] hover:drop-shadow-[0_0_15px_rgba(165,180,252,1)] transition-all duration-300">
        PC-BASED PROJECTS
      </h2>

      <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <a href="/rollballwebgl/index.html" target='_blank' rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={roll} alt="RollBall Game" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">RollBall is a fun PC game where you control a rolling ball, collect all the crystals, and reach the finish line to clear each challenging level.</span>
            </div>
          </a>

          <a href="/tomatofeverwebgl/index.html" target='_blank' rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={tomato} alt="Tomato Fever Game" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">Tomato Fever is a fast-paced PC game where you control a bouncing tomato, guiding it downward through obstacles to reach the endpoint as quickly as possible.</span>
            </div>
          </a>

          <a href="/boxblastwebgl/index.html" target="_blank" rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={boxblast} alt="BoxBlast Game" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">BoxBlast is a thrilling PC game where you smash boxes and dodge skeletons. Test your reflexes as boxes burst and skeletons rise—hit fast, or get caught!</span>
            </div>
          </a>

          <a href="/gocarwebgl/index.html" target="_blank" rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={gocar} alt="GO CAR Game" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">GO CAR is a thrilling PC game where you drive a fast car along the road, collect coins, and dodge obstacles like boxes to score high and survive longer.</span>
            </div>
          </a>

          <a href="/escapethemazewebgl/index.html" target="_blank" rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={escapemat} alt="Escape the Maze Game" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">Escape the Maze is a thrilling PC game where you navigate through a complex maze, collect the hidden key, and reach the final gate — all while avoiding alert guards patrolling the paths.</span>
            </div>
          </a>

          <a href="/hunterfarmwebgl/index.html" target="_blank" rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={hunter} alt="HunterFarm Game" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">HunterFarm is a PC game where you guard your farm from invading animals. Use your skills to stop them before they enter the field and protect your crops from being destroyed.</span>
            </div>
          </a>

          <a href="/jumpingboywebgl/index.html" target="_blank" rel="noopener noreferrer" className="block relative group transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-lg">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-indigo-900/40">
              <img src={jumpingboy} alt="Jumping Boy Game" className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-purple-500/50" />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <span className="text-white text-sm md:text-lg font-semibold text-center leading-relaxed">Jumping Boy is a fast-paced PC game where you control a boy who must jump over every obstacle to survive and keep running. Timing and quick reflexes are the key to winning!</span>
            </div>
          </a>

        </div>
      </div>
    </section>

  </div>
);

export



  // ==========================================================
  // RENDER SKILLS CONTENT
  // ==========================================================
  const renderSkillsContent = () => (
    <div className="flex flex-col gap-24 p-8">
      {/* Tools Section */}
      <section className="relative pt-12 mt-10">
        <h2 className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20 text-5xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-[0_0_8px_rgba(165,180,252,0.6)] hover:drop-shadow-[0_0_15px_rgba(165,180,252,1)] transition-all duration-300">
          TOOLS
        </h2>

        <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { emoji: <iconify-icon icon="skill-icons:unity-light" width="60" height="60"></iconify-icon>, label: "Unity" },
              { emoji: <img src={cocos} alt="#" width="60" height="60" className='rounded-xl' />, label: "Cocos Creator" },
              { emoji: <img src={adobeafter} alt="#" width={60} height={60} className='rounded-xl' />, label: "Adobe After Effects" },
              { emoji: <iconify-icon icon="skill-icons:blender-light" width="60" height="60"></iconify-icon>, label: "Blender" },
              { emoji: <iconify-icon icon="logos:adobe-photoshop" width="60" height="60"></iconify-icon>, label: "Adobe Photoshop" },
              { emoji: <img src={photo} alt="#" width={60} height={60} className='rounded-xl' />, label: "Photopea" },
            ].map((tool, index) => (
              <div key={index} className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 text-center group hover:bg-purple-900/30 transition-all transform hover:scale-[1.05]">
                <div className="text-4xl mb-3 flex justify-center">{tool.emoji}</div>
                <p className="text-gray-300 text-sm font-medium">{tool.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="relative pt-12">
        <h2 className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20 text-5xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-[0_0_8px_rgba(165,180,252,0.6)] hover:drop-shadow-[0_0_15px_rgba(165,180,252,1)] transition-all duration-300">
          LANGUAGES
        </h2>

        <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { emoji: <iconify-icon icon="skill-icons:cs" width="60" height="60"></iconify-icon>, label: "C#" },
              { emoji: <iconify-icon icon="skill-icons:c" width="60" height="60"></iconify-icon>, label: "C" },
              { emoji: <iconify-icon icon="skill-icons:cpp" width="60" height="60"></iconify-icon>, label: "C++" },
              { emoji: <iconify-icon icon="skill-icons:java-light" width="60" height="60"></iconify-icon>, label: "Java" },
              { emoji: <iconify-icon icon="skill-icons:python-light" width="60" height="60"></iconify-icon>, label: "Python" },
              { emoji: <iconify-icon icon="skill-icons:typescript" width="60" height="60"></iconify-icon>, label: "TypeScript" },
            ].map((lang, index) => (
              <div key={index} className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 text-center group hover:bg-purple-900/30 transition-all transform hover:scale-[1.05]">
                <div className="text-4xl mb-3">{lang.emoji}</div>
                <p className="text-gray-300 text-sm font-medium">{lang.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

// ==========================================================
// PORTFOLIO TABS MAIN COMPONENT
// ==========================================================
const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const renderTabButtons = () => (
    <div className="flex flex-nowrap w-full mb-10 gap-0 px-0 sm:px-2 sm:gap-1">
      <button
        onClick={() => setActiveTab('projects')}
        className={`flex-1 py-2 sm:py-2 md:py-3 lg:py-4 rounded-xl font-semibold text-s sm:text-sm md:text-lg lg:text-xl transition-all flex items-center justify-center shadow-lg transform hover:scale-[1.03] whitespace-nowrap ${activeTab === 'projects'
            ? 'bg-purple-600 text-white shadow-purple-500/50'
            : 'border-2 border-purple-500/50 text-gray-300 hover:border-purple-400 hover:text-white bg-purple-900/20'
          }`}
      >
        Projects
      </button>

      <button
        onClick={() => setActiveTab('researchPaper')}
        className={`flex-1 py-2 sm:py-2 md:py-3 lg:py-4 rounded-xl font-semibold text-s sm:text-sm md:text-lg lg:text-xl transition-all flex items-center justify-center shadow-lg transform hover:scale-[1.03] whitespace-nowrap ${activeTab === 'researchPaper'
            ? 'bg-purple-600 text-white shadow-purple-500/50'
            : 'border-2 border-purple-500/50 text-gray-300 hover:border-purple-400 hover:text-white bg-purple-900/20'
          }`}
      >
        Research-Paper
      </button>

      <button
        onClick={() => setActiveTab('certificates')}
        className={`flex-1 py-2 sm:py-2 md:py-3 lg:py-4 rounded-xl font-semibold text-s sm:text-sm md:text-lg lg:text-xl transition-all flex items-center justify-center shadow-lg transform hover:scale-[1.03] whitespace-nowrap ${activeTab === 'certificates'
            ? 'bg-purple-600 text-white shadow-purple-500/50'
            : 'border-2 border-purple-500/50 text-gray-300 hover:border-purple-400 hover:text-white bg-purple-900/20'
          }`}
      >
        Writings
      </button>

      <button
        onClick={() => setActiveTab('skills')}
        className={`flex-1 py-2 sm:py-2 md:py-3 lg:py-4 rounded-xl font-semibold text-s sm:text-sm md:text-lg lg:text-xl transition-all flex items-center justify-center shadow-lg transform hover:scale-[1.03] whitespace-nowrap ${activeTab === 'skills'
            ? 'bg-purple-600 text-white shadow-purple-500/50'
            : 'border-2 border-purple-500/50 text-gray-300 hover:border-purple-400 hover:text-white bg-purple-900/20'
          }`}
      >
        Skills
      </button>
    </div>
  );

  return (
    <div className="relative z-10 container mx-auto px-4 py-12">
      {renderTabButtons()}

      {/* FIXED: Remove overflow-hidden for tabs that need sticky positioning */}
      <div className={`border border-purple-500/30 rounded-2xl  ${activeTab === 'certificates' || activeTab === 'researchPaper' ? '' : 'overflow-hidden'
        }`}>
        {activeTab === 'projects' && renderProjectsContent()}
        {/* FIXED: Use JSX component syntax instead of function call */}
        {activeTab === 'researchPaper' && <ResearchPaperContent />}
        {activeTab === 'certificates' && <CertificatesContent />}
        {activeTab === 'skills' && renderSkillsContent()}
      </div>
    </div>
  );
};

export default PortfolioTabs;