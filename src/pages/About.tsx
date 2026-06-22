import { useState, useRef, useEffect } from 'react';
import VimeoBackground from '../components/VimeoBackground';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: isMuted ? 'mute' : 'unMute' }),
        '*'
      );
    }
  }, [isMuted]);

  const coreServices = [
    'Lighting Production',
    'Sound Systems',
    'Stage & Truss Structures',
    'LED Video Walls',
    'Event Production Support',
    'Technical Crew & Engineering'
  ];

  const whatWeDo = [
    'Weddings',
    'Private parties and social events',
    'Concerts and live performances',
    'Brand activations and corporate events',
    'Producer-led events and mid-tier productions',
    'Large-scale full production events'
  ];

  const capabilities = [
    '3D production design and stage visualization',
    'Lighting engineering and programming',
    'Sound system design and sound checks',
    'Professional installation and load-out',
    'On-site technical crew and production support'
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Banner Section */}
      <VimeoBackground 
        desktopVideoId="1172164695" 
        mobileVideoId="1172164695"
        desktopRatio={4/3}
        mobileRatio={4/3}
        overlayOpacity="opacity-0"
        showGradients={false}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
      >
        <div className="text-center px-6 relative z-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-4" style={{ fontFamily: "'Assistant', sans-serif" }}>
            Highlight Productions
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto font-light">
            Engineering Light, Sound & Stage<br/>
            Supporting events across Los Angeles and Southern California
          </p>
        </div>
      </VimeoBackground>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
              Highlight Productions is a Los Angeles–based event production company specializing in professional lighting, sound systems, staging, and visual production for live events.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
              We support event producers, promoters, planners, and private clients with reliable technical production designed to elevate the overall event experience. Our team focuses on creating well-structured production environments that combine strong visual design, clear sound, and organized technical execution.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
              From private celebrations and concerts to large-scale productions, we approach every event with the same goal: delivering professional production that allows events to run smoothly while creating a powerful experience for audiences.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative rounded-none overflow-hidden shadow-2xl bg-black flex items-center justify-center w-[356px] h-[634px] max-w-full group">
              <div className="absolute w-[150%] h-[150%] flex items-center justify-center pointer-events-none">
                <iframe 
                  ref={iframeRef}
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/GpMP0x9ibLQ?autoplay=1&playsinline=1&controls=0&modestbranding=1&rel=0&disablekb=1&loop=1&playlist=GpMP0x9ibLQ&mute=1&enablejsapi=1" 
                  title="highlight prod - about us" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full object-cover pointer-events-none"
                ></iframe>
              </div>
              
              {/* Sound Toggle Button */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 rounded-none p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Our Core Services</h3>
            <ul className="space-y-4">
              {coreServices.map((service, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="text-orange-700 shrink-0 mt-1" size={20} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-zinc-900 rounded-none p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">What We Do</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">Highlight Productions provides production services for a wide range of events, including:</p>
            <ul className="space-y-4 mb-6">
              {whatWeDo.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm italic text-zinc-500 dark:text-zinc-400">Our services include lighting production, sound systems, staging structures, LED video walls, and complete event production support</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Production-Focused Approach</h3>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
              Successful events depend on careful planning and reliable technical execution. Our team works closely with event organizers to design production setups that match the venue, audience size, and creative direction of the event.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 font-semibold">Our capabilities include:</p>
            <ul className="space-y-4">
              {capabilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Professional Technical Crew</h3>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
              Our team includes experienced sound engineers, lighting engineers, and production technicians who understand the technical demands of live events.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-12 leading-relaxed">
              From installation and system testing to event operation and breakdown, our crew ensures that every production element operates safely and reliably throughout the event.
            </p>
            
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Built for Events of Every Scale</h3>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
              Highlight Productions supports events across multiple production levels — from intimate social gatherings to large-scale productions requiring full technical coordination.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Whether the event takes place in a private venue, concert space, warehouse location, or outdoor environment, we focus on delivering organized and professional production setups that elevate the entire event experience.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl">
            <img src="https://i.postimg.cc/9RRD0b4x/DSC09132.jpg" alt="Highlight Productions Event Setup" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl">
             <img src="https://i.postimg.cc/f3btnDD1/DSC09280-(1).jpg" alt="Highlight Productions Sound and Lighting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-100 dark:bg-zinc-900 rounded-none p-8 md:p-12 shadow-xl text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Let's Build Your Event</h3>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
            If you're planning an event and need professional lighting, sound, staging, or full production support, our team is ready to help design the right setup for your venue and audience.
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
