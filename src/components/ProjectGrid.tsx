import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from "@/components/ui/card";

import antes2 from '../assets/antes 2.jpeg';
import antes3 from '../assets/Antes 3.jpeg';
import final1 from '../assets/final 1.jpeg';
import final2 from '../assets/Final 2.jpeg';
import final3 from '../assets/Final 3.jpeg';
import render1 from '../assets/Render1.jpeg';

const projectColumns = [
  {
    id: 1,
    title: "Proyecto 1",
    before: antes2,
    after: final2
  },
  {
    id: 2,
    title: "Proyecto 2",
    before: antes3,
    after: final3
  },
  {
    id: 3,
    title: "Proyecto 3",
    before: render1,
    after: final1
  }
];

export const ProjectGrid: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-pink text-xs uppercase tracking-[0.5em] font-bold mb-4 block"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-brand-dark">Proyectos Seleccionados</h2>
          <div className="w-24 h-0.5 bg-brand-teal mx-auto opacity-30"></div>
          <p className="mt-8 text-brand-teal/80 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            Comparativa de procesos: estado inicial y resultado final de cada propuesta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectColumns.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-center text-brand-dark text-sm uppercase tracking-[0.3em] font-semibold">
                {project.title}
              </p>

              <Card className="group overflow-hidden border-none shadow-lg bg-brand-bg">
                <CardContent className="p-0 relative">
                  <div className="aspect-[4/5] overflow-hidden">
                    {project.before ? (
                      <img
                        src={project.before}
                        alt={`${project.title} antes`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-brand-teal/10 flex items-center justify-center p-6 text-center">
                        <p className="text-brand-dark/70 text-sm uppercase tracking-[0.2em] font-medium">
                          Sin antes
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-dark/20 text-white/80 text-[9px] uppercase tracking-[0.22em] py-1 text-center">
                    Antes
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-none shadow-lg bg-brand-bg">
                <CardContent className="p-0 relative">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={project.after}
                      alt={`${project.title} final`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-dark/20 text-white/80 text-[9px] uppercase tracking-[0.22em] py-1 text-center">
                    Final
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
