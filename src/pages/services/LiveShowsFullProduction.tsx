import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LiveShowsFullProduction() {
  const productionCapabilitiesList = [
    'Lighting Production',
    'Sound Systems',
    'Stage & Truss Structures',
    'LED Video Walls',
    'DJ & Performance Systems',
    'Event Technical Crew',
    '3D Stage Design',
    'Lighting Engineering',
    'Sound System Design',
    'On-Site Technicians'
  ];

  const productionProcess = [
    {
      step: '1',
      title: 'Production Planning',
      description: 'We begin by reviewing the venue, audience size, and event requirements in order to design the appropriate technical setup for the live performance or event.'
    },
    {
      step: '2',
      title: 'Technical Design',
      description: 'Our team develops lighting layouts, sound system positioning, and stage configurations. For larger productions we provide 3D production design and stage visualization.'
    },
    {
      step: '3',
      title: 'Load-In & Installation',
      description: 'Our crew installs lighting systems, sound equipment, staging, truss structures, and visual elements following a structured installation plan.'
    },
    {
      step: '4',
      title: 'System Testing & Sound Checks',
      description: 'Before the event begins, all technical systems are tested and calibrated. This includes sound checks, lighting programming, and system verification.'
    },
    {
      step: '5',
      title: 'Event Operation',
      description: 'During the event our technicians manage lighting systems, sound systems, and technical equipment to ensure the production runs smoothly.'
    },
    {
      step: '6',
      title: 'Breakdown & Load-Out',
      description: 'After the event concludes, our crew safely dismantles and removes all equipment from the venue following organized load-out procedures.'
    }
  ];

  const detailedCapabilities = [
    {
      title: 'Concert & Event Lighting',
      description: 'Dynamic lighting systems designed to enhance the energy of live performances and create immersive visual environments.',
      features: [
        'Moving head lighting fixtures',
        'Stage wash lighting',
        'Dynamic lighting effects',
        'Strobe and laser systems',
        'Professional lighting control systems'
      ]
    },
    {
      title: 'Professional Sound Systems',
      description: 'Clear and powerful audio systems designed to deliver balanced sound for both performers and large audiences.',
      features: [
        'Main line-array speaker systems',
        'Subwoofer systems',
        'Stage monitoring for performers',
        'Wireless microphones',
        'DJ and performance audio systems'
      ]
    },
    {
      title: 'Stage & Truss Structures',
      description: 'Stage environments form the backbone of live event productions. We design stage layouts and structural support systems that allow lighting, visuals, and performers to integrate safely.',
      features: [
        'Stage platforms',
        'Truss structures for lighting rigs',
        'Rigging support systems',
        'Performance stage layouts'
      ]
    },
    {
      title: 'LED Visual Systems',
      description: 'Visual elements play a major role in modern productions. We provide LED display systems that allow producers and artists to incorporate visuals and video content into the event.',
      features: [
        'Modular LED video walls',
        'Video processors and control systems',
        'Custom screen configurations',
        'Visual playback support'
      ]
    }
  ];

  const whyWorkWithUs = [
    'Professional-grade production equipment',
    'Experienced sound engineers and lighting technicians',
    'Structured load-in and load-out planning',
    'Flexible production layouts for different venues',
    'Reliable technical execution during events',
    'Production planning including 3D design and system engineering'
  ];

  const combinedImages = [
    'https://i.postimg.cc/PxphwKzS/ALN07410.jpg',
    'https://i.postimg.cc/RZsjLK0w/ALN09840.jpg',
    'https://i.postimg.cc/htyH1TG5/IMG-2586.jpg',
    'https://i.postimg.cc/MTCwbRdr/DSC09293.jpg'
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tighter uppercase" style={{ fontFamily: "'Assistant', sans-serif" }}>
              Live Shows & Full Production
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-zinc-600 dark:text-zinc-400 mb-12">
            Complete Event Production Solutions
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
              Highlight Productions delivers full-scale event production for concerts, live performances, and large-scale events that require advanced technical planning, professional engineering, and coordinated execution.
            </p>
            <p>
              Large events involve multiple production elements working together — lighting, sound, staging, visuals, and technical crew. Our team works with artists, promoters, and organizers to design and execute immersive experiences that engage audiences and support performers.
            </p>
            <p>
              From large concerts and festivals to major brand activations and multi-stage events, we provide the production infrastructure required to deliver high-impact experiences flawlessly.
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
                alt="Live Shows and Full Production Solutions"
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
          className="bg-white dark:bg-zinc-900 rounded-none p-8 md:p-12 shadow-xl mb-20"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">Production Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionCapabilitiesList.map((capability, i) => (
              <div key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-black p-4 rounded-none">
                <CheckCircle2 className="text-orange-500 shrink-0" size={20} />
                <span className="font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Event Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">Event Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {combinedImages.map((img, i) => (
              <div key={i} className="group relative rounded-none overflow-hidden aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 cursor-pointer">
                <img
                  src={img}
                  alt={`Live Production Event ${i + 1}`}
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
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Our Production Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionProcess.map((process, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 rounded-none p-8 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl font-bold text-zinc-100 dark:text-zinc-800/50 group-hover:text-orange-100 dark:group-hover:text-orange-700/20 transition-colors duration-300 z-0">
                  {process.step}
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-none bg-orange-500 text-white text-sm">
                      {process.step}
                    </span>
                    {process.title}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{process.description}</p>
                </div>
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
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Detailed Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedCapabilities.map((capability, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 rounded-none p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{capability.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{capability.description}</p>
                <ul className="space-y-3">
                  {capability.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-100 dark:bg-zinc-900 rounded-none p-8 md:p-12 shadow-xl mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Why Producers Work With Us</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Producers work with Highlight Productions because we provide organized, reliable production environments designed for professional events.
              </p>
              <ul className="space-y-4">
                {whyWorkWithUs.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={20} />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Start Your Production</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Our team provides complete technical design and execution for concerts, festivals, and large-scale live productions.
              </p>
              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Plan Your Event</h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                  Ready to elevate your live show? Contact us to discuss your venue, requirements, and technical needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-none hover:bg-orange-700 transition-colors gap-2"
                >
                  Start Planning Your Event <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
