import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'motion/react';
import carr1 from '../assets/Carr1.jpeg';
import carr2 from '../assets/carr2.jpeg';
import carr3 from '../assets/Carr3.jpeg';

const images = [
  {
    url: carr1,
    title: "Baño en Mármol",
    subtitle: "Obra ejecutada"
  },
  {
    url: carr2,
    title: "Jardín Interior",
    subtitle: "Diseño biofílico"
  },
  {
    url: carr3,
    title: "Cocina-Comedor",
    subtitle: "Render conceptual"
  }
];

export const HeroCarousel: React.FC = () => {
  return (
    <section id="inicio" className="pt-28 pb-12 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-brand-pink/10 to-transparent -z-10"></div>
      
      <Carousel className="w-full max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(74,99,94,0.15)]">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full group">
                <img
                  src={image.url}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent flex flex-col justify-end p-10 md:p-20">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-0.5 bg-brand-pink"></div>
                      <p className="text-brand-pink text-xs md:text-sm uppercase tracking-[0.4em] font-bold">
                        {image.subtitle}
                      </p>
                    </div>
                    <h2 className="text-white text-4xl md:text-7xl font-extralight tracking-tight mb-4">
                      {image.title}
                    </h2>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 bg-white/10 border-white/20 text-white hover:bg-brand-pink hover:text-brand-dark backdrop-blur-md transition-all w-12 h-12" />
        <CarouselNext className="right-6 bg-white/10 border-white/20 text-white hover:bg-brand-pink hover:text-brand-dark backdrop-blur-md transition-all w-12 h-12" />
      </Carousel>
    </section>
  );
};
