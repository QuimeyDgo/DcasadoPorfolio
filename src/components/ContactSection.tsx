import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/ajax/dcasado_75@hotmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Consulta web - ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario');
      }

      setFormStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (_error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">Hablemos de tu <span className="text-brand-pink italic">próximo proyecto</span>.</h2>
            <p className="text-white/70 font-light text-lg mb-12 max-w-md">
              ¿Tienes una idea en mente? Me encantaría ayudarte a hacerla realidad. Escríbeme y empecemos a diseñar.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-pink group-hover:border-brand-pink transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Email</p>
                  <p className="text-lg font-light"> dcasadointeriores@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-pink group-hover:border-brand-pink transition-all">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Instagram</p>
                  <a href="https://www.instagram.com/dcasadointeriores" target="_blank" rel="noreferrer" className="text-lg font-light hover:text-brand-pink transition-colors">
                    @dcasadointeriores
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-pink group-hover:border-brand-pink transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Ubicación</p>
                  <p className="text-lg font-light">Mar del Plata, Argentina</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/60 ml-1">Nombre</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-pink transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/60 ml-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-pink transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/60 ml-1">Mensaje</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-pink transition-colors resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-pink hover:bg-brand-pink/80 text-brand-dark font-bold py-6 rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
              {formStatus === 'success' && (
                <p className="text-sm text-emerald-300 text-center">
                  Mensaje enviado. Te responderé pronto.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-sm text-red-300 text-center">
                  Hubo un problema al enviar. Intenta nuevamente.
                </p>
              )}
            </form>
          </motion.div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center text-brand-dark font-bold text-xs">DC</div>
            <p className="text-sm font-light text-white/60">© 2026 Daniela Casado. Todos los derechos reservados.</p>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </section>
  );
};
