import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from 'lucide-react';
import navLogo from '../assets/nav-logo.png';

export const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/90 backdrop-blur-lg border-b border-brand-teal/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-4 group focus:outline-none">
              <div className="transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                <img
                  src={navLogo}
                  alt="Daniela Casado"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover"
                />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-brand-dark">Daniela Casado</p>
                <p className="text-[9px] tracking-[0.3em] uppercase text-brand-pink font-bold">Interiorismo & Diseño</p>
              </div>
              <Menu className="w-6 h-6 text-brand-teal md:hidden" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64 bg-brand-bg border-brand-teal/20 p-2 rounded-2xl shadow-2xl">
            <DropdownMenuItem onClick={() => scrollTo('inicio')} className="cursor-pointer rounded-xl focus:bg-brand-pink/10 focus:text-brand-dark py-3 px-4 transition-all">
              <span className="text-xs uppercase tracking-widest font-medium">Inicio</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollTo('proyectos')} className="cursor-pointer rounded-xl focus:bg-brand-pink/10 focus:text-brand-dark py-3 px-4 transition-all">
              <span className="text-xs uppercase tracking-widest font-medium">Mis Proyectos</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollTo('sobre-mi')} className="cursor-pointer rounded-xl focus:bg-brand-pink/10 focus:text-brand-dark py-3 px-4 transition-all">
              <span className="text-xs uppercase tracking-widest font-medium">Sobre Mí</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollTo('contacto')} className="cursor-pointer rounded-xl focus:bg-brand-pink/10 focus:text-brand-dark py-3 px-4 transition-all">
              <span className="text-xs uppercase tracking-widest font-medium">Contacto</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-dark/40">
          <button onClick={() => scrollTo('proyectos')} className="hover:text-brand-pink transition-all relative group">
            Proyectos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollTo('sobre-mi')} className="hover:text-brand-pink transition-all relative group">
            Sobre Mí
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollTo('contacto')} className="hover:text-brand-pink transition-all relative group">
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
