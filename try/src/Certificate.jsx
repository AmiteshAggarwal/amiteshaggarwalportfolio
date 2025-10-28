import { useEffect, useRef } from 'react';

import cert1 from './images/certificate1.jpg';
import cert2 from './images/certificate2.jpg';
import cert3 from './images/certificate3.jpg';
import cert4 from './images/certificate4.jpg';
import cert5 from './images/certificate5.jpg';
const CertificatesContent = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Demo certificates with placeholder images
  const certificates = [
    {
      src: cert1,
      title: "Awarded for completing one year of dedicated work and valuable contributions at IITL (CURIN), Chitkara University.",
      icon: "🎓"
    },
    {
      src: cert2,
      title: "Received for outstanding involvement and support in successfully delivering a funded project at IITL (CURIN), Chitkara University.",
      icon: "🏆"
    },
    {
      src: cert3,
      title: "Recognised for volunteering as an organiser and helping ensure the smooth execution of the cultural event Banger 2024-2025.",
      icon: "🎉"
    },
    {
      src: cert4,
      title: "Awarded the Certificate of Excellence for successfully completing the Introduction to Python course from Coding Ninjas",
      icon: "🐍"
    },
    {
      src: cert5,
      title: "Awarded a Certificate of Appreciation for delivering absolute performance and remarkable problem-solving skills in the Hackathon HTM 4.0",
      icon: "💻"
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current.filter(card => card !== null);
    if (cards.length === 0) return;

    const STACK_SPACING = 20; // Space between cards in stack
    const SCALE_AMOUNT = 0.95; // Each card scales to 95% of the one above
    const BLUR_PER_CARD = 1.5;

    const updateCardStack = () => {
      const scrollY = window.scrollY;
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const stickyTop = 80 + (index * STACK_SPACING);
        
        // Determine if card should be sticky
        const isSticky = rect.top <= stickyTop;
        
        if (isSticky) {
          card.style.position = 'sticky';
          card.style.top = `${stickyTop}px`;
        } else {
          card.style.position = 'relative';
          card.style.top = '0';
        }
        
        // Count how many cards are stuck BELOW/AFTER this one
        let cardsAbove = 0;
        for (let i = index + 1; i < cards.length; i++) {
          const nextCard = cards[i];
          const nextRect = nextCard.getBoundingClientRect();
          const nextStickyTop = 80 + (i * STACK_SPACING);
          
          // Check if next card is stuck (meaning current card is underneath it)
          if (nextRect.top <= nextStickyTop + 5) {
            cardsAbove++;
          }
        }
        
        // Apply scale and blur based on how many cards are on top
        const scale = Math.pow(SCALE_AMOUNT, cardsAbove);
        const blur = cardsAbove * BLUR_PER_CARD;
        
        card.style.transform = `scale(${scale})`;
        card.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
        card.style.transformOrigin = 'top center';
        card.style.opacity = '1';
        card.style.zIndex = `${100 + index}`;
      });
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateCardStack();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateCardStack);
    
    // Initial call
    setTimeout(updateCardStack, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCardStack);
    };
  }, []);

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          My Certificates
        </h2>
        <p className="text-lg text-gray-300">
          Scroll to see them stack! ✨
        </p>
      </div>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="relative px-4 md:px-8"
        style={{ paddingBottom: '60vh' }}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-96"
            style={{
              willChange: 'transform, filter',
            }}
          >
            <div className="relative h-48 md:h-64 overflow-hidden bg-gray-100">
              <img
                src={cert.src}
                alt={cert.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg">
                {cert.icon}
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                  {index + 1} of {certificates.length}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {cert.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pb-12 px-4">
        <p className="text-xl text-white font-semibold">
          All achievements complete! 🎉
        </p>
      </div>
    </div>
  );
};

export default CertificatesContent;