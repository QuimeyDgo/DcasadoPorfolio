import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { ProjectGrid } from './components/ProjectGrid';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-pink/30 selection:text-brand-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-brand-pink/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-brand-teal/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-pink z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <HeroCarousel />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <h2 className="text-5xl md:text-7xl font-light text-brand-dark leading-tight">
              Transformando espacios en <br />
              <span className="text-brand-teal italic font-normal">experiencias sensoriales</span>.
            </h2>
          </motion.div>
        </div>

        <ProjectGrid />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="bg-brand-dark py-8 px-6 text-center border-t border-white/5">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.4em]">
          Daniela Casado | Diseño Interior & Renders
        </p>
      </footer>
    </div>
  );
}
