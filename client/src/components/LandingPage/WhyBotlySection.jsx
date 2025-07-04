import React, { useEffect, useRef, useState } from "react";

const WhyBotlySection = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);

  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;

          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }

          if (progress >= 0.66) setActiveCardIndex(2);
          else if (progress >= 0.33) setActiveCardIndex(1);
          else setActiveCardIndex(0);

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  return (
    <div ref={sectionRef} className="relative" style={{ height: '300vh' }}>
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="why-botly">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="orange-chip opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white mr-2">02</span>
                <span>Platform</span>
              </div>
            </div>
            <h2 className="section-title text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-1 md:mb-2">
              Why Choose Botly
            </h2>
          </div>

          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card */}
            <div className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`}
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}>
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-orange-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundBlendMode: "overlay"
                }}></div>

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">No-Code Solution</span>
                </div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className=" sm:text-3xl md:text-4xl lg:text-4xl font-display text-white font-bold leading-tight mb-4">
                    Create intelligent chatbots without writing a single line of code
                  </h3>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`}
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}>
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-orange-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay"
                }}></div>

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">AI-Powered</span>
                </div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className=" sm:text-3xl md:text-4xl lg:text-4xl font-display text-white font-bold leading-tight mb-4">
                    Powered by advanced LLMs and RAG technology for smarter conversations
                  </h3>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`}
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}>
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-orange-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay"
                }}></div>

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Easy Integration</span>
                </div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="sm:text-3xl md:text-4xl lg:text-4xl font-display text-white font-bold leading-tight mb-4">
                    Deploy in minutes with our <span className="text-[#FC4D0A]">simple NPM package</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyBotlySection;
