import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Weddings() {
  const features = [
    'Custom wedding lighting design',
    'Ambient uplighting for venues and ballrooms',
    'Dance floor lighting and effects',
    'Stage and truss setups for performances or DJs',
    'LED video walls for visuals and presentations',
    'Professional sound systems for ceremonies and receptions',
    'Wireless microphones for speeches and officiants',
    'DJ equipment and booth setups',
    'Elegant lighting accents for tables, walls, and architecture',
    'Professional installation and teardown by experienced crew'
  ];

  const weddingImages = [
    'https://i.postimg.cc/VLFgjwNK/DSC-2249-Enhanced-NR.jpg',
    'https://i.postimg.cc/jdhczTjg/DSC-2266-Enhanced-NR.jpg',
    'https://i.postimg.cc/pXvkhrPB/DSC-7594-Enhanced-NR.jpg',
    'https://i.postimg.cc/J4Qxb8hK/DSC-7830-Enhanced-NR.jpg',
    'https://i.postimg.cc/BQCpx3vV/DSC00645-Enhanced-NR.jpg',
    'https://i.postimg.cc/15SMnXy8/IMG-2765.jpg',
    'https://i.postimg.cc/wTzFyM95/IMG-8606.jpg'
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tighter uppercase mb-6" style={{ fontFamily: "'Assistant', sans-serif" }}>
            Weddings
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-zinc-600 dark:text-zinc-400 mb-12">
            Elegant Wedding Lighting & Production
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed"
          >
            <p>
              At Highlight Productions Inc., we specialize in transforming wedding venues into unforgettable experiences through professional lighting, sound, and production design. From intimate ceremonies to large luxury celebrations, our team works closely with couples, planners, and venues to create the perfect atmosphere for every moment of the event.
            </p>
            <p>
              Our production services enhance every part of the celebration — from romantic ceremony lighting to energetic dance floor environments. With high-end equipment, experienced technicians, and a focus on detail, we ensure that every wedding looks stunning and runs seamlessly.
            </p>
            <p>
              Whether you're planning a modern luxury wedding, a classic ballroom reception, or an outdoor celebration, we design lighting and production setups that elevate the entire experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative rounded-none overflow-hidden shadow-2xl bg-black flex items-center justify-center w-[356px] h-[634px] max-w-full">
              <iframe 
                width="320" 
                height="576" 
                src="https://www.youtube.com/embed/j5VoTKP-CA0" 
                title="HIGHLIGHTPRODUCTION" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
              <div className="absolute inset-0 bg-black/10 dark:bg-black/30 mix-blend-overlay pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 rounded-none p-8 md:p-12 shadow-xl mb-20"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">What We Provide for Weddings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="text-orange-700 shrink-0 mt-1" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Wedding Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">Wedding Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {weddingImages.map((img, i) => (
              <div key={i} className="group relative rounded-none overflow-hidden aspect-square bg-zinc-100 dark:bg-zinc-900 cursor-pointer">
                <img 
                  src={img} 
                  alt={`Wedding moment ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">Designed for Every Moment</h3>
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            From the ceremony to the last dance, our goal is to create a seamless production experience that enhances the beauty and emotion of your wedding day. Our team handles the technical details so you can focus on celebrating with your guests.
          </p>
          
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h4 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Let's Bring Your Wedding Vision to Life</h4>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              Planning a wedding and looking for professional lighting and production?<br/>
              Our team is ready to help design the perfect setup for your special day.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-none hover:bg-orange-700 transition-colors gap-2"
            >
              Start Planning Your Event <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
