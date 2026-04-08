import React from 'react';
import { motion } from 'motion/react';
import aboutMeImage from '../assets/AboutMe.jpeg';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-brand-teal/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center lg:justify-items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full max-w-[min(100%,20rem)] mx-auto lg:max-w-none lg:mx-0"
        >
          <div className="aspect-[3/4] rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto">
            <img
              src={aboutMeImage}
              alt="Daniela Casado"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-pink/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-teal/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl mx-auto lg:max-w-none lg:mx-0 text-center lg:text-left"
        >
          <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Sobre Mí</span>
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-brand-dark leading-tight">
            Diseñando con <span className="italic">propósito</span> y elegancia.
          </h2>
          <div className="space-y-6 text-brand-dark/80 font-light leading-relaxed text-lg">
            <p>
              Soy Daniela Casado, diseñadora de interiores apasionada por crear espacios que no solo se vean bien, sino que también se sientan bien.
            </p>
            <p>
              Mi enfoque combina una estética depurada con una ejecución técnica. Si bien tengo experiencia en el ámbito residencial, mi visión se extiende a la hotelería y locales comerciales, priorizando siempre el equilibrio entre el impacto visual y la funcionalidad. Cuento con especialización en diseño de mobiliario, stands y visualización arquitectónica (renders), lo que me permite anticipar cada proyecto con precisión e integrar tecnología y equipamiento con detalle.
            </p>
            <p>
              Analizo cada propuesta desde la ergonomía y la optimización de superficies para crear soluciones que se adaptan a usos tanto personales como profesionales. Mi objetivo es aportar una mirada fresca y resolutiva, transformando metros cuadrados en espacios con identidad propia.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-6 sm:gap-12 lg:justify-start">
            <div>
              <p className="text-3xl font-display text-brand-teal font-light">3+</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-dark/60 mt-1">Años Exp.</p>
            </div>
            <div>
              <p className="text-3xl font-display text-brand-teal font-light">1:1</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-dark/60 mt-1">Atención</p>
            </div>
            <div>
              <p className="text-3xl font-display text-brand-teal font-light">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-dark/60 mt-1">Pasión</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
