import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CorporateEvents() {
  const corporateNeeds = [
    {
      title: 'Clear Sound for Presentations',
      description: 'Speeches, presentations, and announcements require sound systems that are clear and dependable.',
      features: [
        'Professional speaker systems',
        'Wireless handheld microphones',
        'Lavalier microphones for presenters',
        'Sound coverage for the audience'
      ]
    },
    {
      title: 'Clean Lighting for the Venue',
      description: 'Lighting plays an important role in creating a polished environment without distracting from the event.',
      features: [
        'Ambient venue lighting',
        'Stage lighting for presenters',
        'Accent lighting for the space'
      ]
    },
    {
      title: 'Stage & Presentation Areas',
      description: 'Many corporate events require a small stage or presentation area for speakers or panel discussions.',
      features: [
        'Stage platforms',
        'Truss support structures',
        'Lighting for speakers',
        'Audio support for panels or presentations'
      ]
    }
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
            Corporate Events
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-zinc-600 dark:text-zinc-400 mb-12">
            Reliable Technical Production for Business Events
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
              Corporate events require a different level of organization and professionalism. At Highlight Productions, we provide clean and reliable lighting, sound, and staging setups that support presentations, company gatherings, and branded events.
            </p>
            <p>
              Our team works with event planners, marketing teams, and venues to ensure that the technical side of the event runs smoothly — allowing speakers, presenters, and organizers to focus on the event itself.
            </p>
            <p>
              Whether it's a company celebration, networking event, product launch, or brand activation, we help create an environment that feels professional and well-executed.
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
                alt="Corporate Events Production" 
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
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">What Corporate Events Usually Need</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">Corporate events often require simple but reliable technical solutions. We help provide the core elements that allow the event to run smoothly</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateNeeds.map((need, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 rounded-none p-8 shadow-lg">
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{need.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{need.description}</p>
                <ul className="space-y-3">
                  {need.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="text-orange-700 shrink-0 mt-1" size={18} />
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
          className="bg-zinc-100 dark:bg-zinc-900 rounded-none p-8 md:p-12 shadow-xl mb-20 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Professional Crew</h3>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
            Our team includes experienced sound engineers and lighting technicians who ensure that all equipment is installed correctly and operates reliably throughout the event.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-12">
            We focus on creating smooth technical environments so corporate events can run without interruptions.
          </p>
          
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h4 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Planning a Corporate Event?</h4>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              If you're planning a company event and need professional sound, lighting, or staging support, our team can help design the right setup for your venue.
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
