import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

export default function PartiesSocialEvents() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const command = isMuted ? 'unMute' : 'mute';
      iframeRef.current.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: command,
        args: []
      }), '*');
      setIsMuted(!isMuted);
    }
  };

  const atmosphereFeatures = [
    'A strong visual atmosphere',
    'A clean and exciting dance floor environment',
    'Professional sound coverage for music and announcements',
    'A setup that feels elevated, polished, and event-ready'
  ];

  const providedServices = [
    {
      title: 'DJ & Music Setups',
      description: 'Professional DJ setups and sound systems designed for private parties and social events.',
      features: [
        'DJ equipment setups',
        'Professional sound systems',
        'Booth monitors',
        'DJ booth setups'
      ]
    },
    {
      title: 'Party Lighting',
      description: 'Lighting is one of the biggest factors in creating the right energy for a party.',
      features: [
        'Dance floor lighting',
        'Ambient venue lighting',
        'Wireless uplighting',
        'Laser effects',
        'Strobe lighting'
      ]
    }
  ];

  const idealFor = [
    'Birthday parties',
    'Private celebrations',
    'After-parties',
    'House parties',
    'Holiday parties',
    'Social gatherings',
    'Lifestyle and nightlife-style events'
  ];

  const partyImages = [
    'https://i.postimg.cc/bvRqPsY6/IMG-1956.jpg',
    'https://i.postimg.cc/j5dtStLK/IMG-3472.jpg'
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
            Parties & Social Events
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-zinc-600 dark:text-zinc-400 mb-4">
            High-Energy Lighting, Sound & DJ Experiences for Private Events
          </h2>
          <p className="text-orange-700 font-semibold mb-12 uppercase tracking-wider">Typical event scale: 50 – 200 guests</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed"
          >
            <p>
              The right production setup can completely change the feel of a party. At Highlight Productions, we create lighting, sound, and DJ environments that transform private events into unforgettable experiences.
            </p>
            <p>
              From birthdays and private celebrations to after-parties and social gatherings, our team builds event setups that bring energy into the room and keep guests engaged throughout the night.
            </p>
            <p>
              Unlike simple equipment rentals, our party and social event services include professional team members on-site to install, manage, and ensure that all technical elements run smoothly throughout the event.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative rounded-none overflow-hidden shadow-2xl bg-black flex items-center justify-center w-[356px] h-[634px] max-w-full group">
              <iframe 
                ref={iframeRef}
                width="356" 
                height="634" 
                src="https://www.youtube.com/embed/7c76VhLp4fQ?autoplay=1&mute=0&loop=1&playlist=7c76VhLp4fQ&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1" 
                title="Highlight PROD Parties & Social Events" 
                frameBorder="0" 
                allow="autoplay; encrypted-media; picture-in-picture" 
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
              <div className="absolute inset-0 bg-black/10 dark:bg-black/30 mix-blend-overlay pointer-events-none"></div>
              
              <button 
                onClick={toggleMute}
                className="absolute bottom-4 right-4 z-30 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-md transition-all border border-white/20 cursor-pointer shadow-xl flex items-center justify-center"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Built for Atmosphere</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Parties are not just about equipment — they're about mood, energy, and flow. The combination of lighting, sound, and layout is what turns a regular venue into a real event experience.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 font-semibold">We design setups that help create:</p>
              <ul className="space-y-4">
                {atmosphereFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Ideal For</h3>
              <ul className="space-y-4">
                {idealFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Party Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">Event Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partyImages.map((img, i) => (
              <div key={i} className="group relative rounded-none overflow-hidden aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 cursor-pointer">
                <img 
                  src={img} 
                  alt={`Party and social event ${i + 1}`} 
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
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">What We Provide</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {providedServices.map((service, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 rounded-none p-8 shadow-lg">
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{service.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-none p-8 md:p-12 shadow-xl text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Event Setup & Technical Support</h3>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
              For social events, our services include professional crew members on-site who handle the installation, operation, and breakdown of the equipment.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-12">
              Our team ensures that lighting, sound, and DJ setups operate smoothly throughout the event so hosts and guests can simply enjoy the party.
            </p>
            
            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <h4 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Create the Right Energy for Your Event</h4>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Planning a private event? Our team can help design the right lighting, sound, and DJ setup to match the energy of your celebration.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-none hover:bg-orange-700 transition-colors gap-2"
              >
                Start Planning Your Event <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
