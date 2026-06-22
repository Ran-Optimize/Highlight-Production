import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CulturalEvents() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tighter uppercase mb-6" style={{ fontFamily: "'Assistant', sans-serif" }}>
            Cultural Events
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-zinc-600 dark:text-zinc-400 mb-12">
            Lighting & Production for Elevated Celebrations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium"
          >
            <p>
              At Highlight Productions Inc., we create lighting, sound, and production for cultural events that feel intentional, clean, and built for the moment. From intimate gatherings to large-scale celebrations, every setup is designed to match the energy of the room.
            </p>
            <p>
              Our team ensures every transition — from formal moments to high-energy dance sets — feels seamless and well executed.
            </p>
            <p>
              We work closely with families, venues, and event planners to ensure every detail is aligned and executed at the highest level.
            </p>
            <p>
              With high-end equipment, experienced technicians, and attention to detail, we deliver productions that feel effortless and unforgettable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl">
              <img
                src="https://i.postimg.cc/L6L15FQW/Photo-Feb-14-2026-6-05-08-PM.jpg"
                alt="Cultural Event Celebration"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/30 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-100 dark:bg-zinc-900 rounded-none p-8 md:p-12 shadow-xl text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Plan Your Cultural Event</h3>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
            Ready to elevate your celebration? Our team acts as your dedicated production partner, ensuring every moment feels seamless and meticulously designed.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-none hover:bg-orange-700 transition-colors gap-2"
          >
            Start Planning Your Event <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
