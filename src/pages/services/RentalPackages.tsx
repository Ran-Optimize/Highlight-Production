import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RentalPackages() {
  const djPackages = [
    {
      title: 'Basic DJ Equipment Package',
      description: 'A professional DJ setup ideal for private events and smaller performances.',
      features: [
        '(2) Pioneer CDJ-3000 players',
        '(1) Pioneer DJM-V10 / A9 / DJM-900NXS2 mixer'
      ]
    },
    {
      title: 'Full DJ Equipment Package',
      description: 'A complete DJ setup for DJs who prefer a four-deck performance layout.',
      features: [
        '(4) Pioneer CDJ-3000 players',
        '(1) Pioneer DJM-V10 / A9 / DJM-900NXS2 mixer'
      ]
    }
  ];

  const audioPackages = [
    {
      title: 'Audio Package (50–100 Guests)',
      description: 'A compact sound system designed for smaller venues and private events.',
      features: [
        '(2) LD Systems Maui 44 G2 speakers',
        '(1) QSC K12.2 booth monitor',
        '(1) Pioneer RX3 DJ controller',
        '(1) DJ booth'
      ],
      note: 'Optional upgrade available for a CDJ setup.'
    },
    {
      title: 'Audio Package (100–200 Guests)',
      description: 'A larger sound system designed for events that require stronger sound coverage.',
      features: [
        '(2) L-Acoustics Syva speakers',
        '(2) L-Acoustics KS21 subwoofers',
        '(1) QSC K12.2 booth monitor',
        '(1) Pioneer RX3 DJ controller',
        '(1) DJ booth'
      ],
      note: 'Optional upgrade available for a CDJ setup.'
    }
  ];

  const lightingPackages = [
    {
      title: 'Basic Lighting Package',
      description: 'A simple lighting setup designed to enhance the atmosphere of smaller events.',
      features: [
        '(2) Portman P1 fixtures',
        '(8) RGBWAUV wireless uplights',
        'DMX lighting controller'
      ]
    },
    {
      title: 'Upgraded Lighting Package',
      description: 'A more dynamic lighting setup designed for dance floors and party environments.',
      features: [
        'Custom truss structure',
        '(1) 2W laser system',
        '(4) Portman P1 fixtures',
        '(4) Chauvet Colorado PXL Bar 8',
        '(12) RGBWAUV wireless uplights',
        'DMX lighting controller'
      ]
    },
    {
      title: 'Premium Lighting Package',
      description: 'An expanded lighting setup designed for high-energy events and larger dance floors.',
      features: [
        'Custom truss structure',
        '(1) 10W laser system',
        '(4) 300W CMY hybrid moving spots',
        '(4) RGB strobes',
        '(4) Chauvet Colorado PXL Bar 8',
        '(16) RGBWAUV wireless uplights'
      ]
    }
  ];

  const deliveryOptions = [
    'Pickup from our warehouse',
    'Delivery to your event location',
    'Delivery with setup and pickup after the event'
  ];

  const rentalImages = [
    'https://i.postimg.cc/PJSL5StM/IMG-2233.jpg',
    'https://i.postimg.cc/6qM7pM9G/IMG-4410.jpg'
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
            Rental Packages
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-zinc-600 dark:text-zinc-400 mb-12">
            Professional Event Equipment Rentals
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
              Highlight Productions offers professional DJ, audio, and lighting equipment for smaller events, DJs, and event organizers who need reliable gear without full production services.
            </p>
            <p>
              Our rental packages provide high-quality equipment that is ready to perform. These packages are ideal for private events, small venues, pop-up parties, and DJ performances where a full production team is not required.
            </p>
            <p>
              All equipment is tested, prepared, and ready for use. Equipment can be provided through warehouse pickup or delivery with setup and pickup after the event.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl">
              <img 
                src="https://i.postimg.cc/7YGL5QG2/ALN06159.jpg" 
                alt="Professional Event Equipment Rentals" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/30 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-16 mb-20">
          {/* DJ Packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">DJ Equipment Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {djPackages.map((pkg, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-900 rounded-none p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{pkg.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">{pkg.description}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
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

          {/* Audio Packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">Audio Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {audioPackages.map((pkg, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-900 rounded-none p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{pkg.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm italic text-zinc-500 dark:text-zinc-400">{pkg.note}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lighting Packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">Lighting Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lightingPackages.map((pkg, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-900 rounded-none p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{pkg.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">{pkg.description}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
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
        </div>

        {/* Rental Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">Equipment Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rentalImages.map((img, i) => (
              <div key={i} className="group relative rounded-none overflow-hidden aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 cursor-pointer">
                <img 
                  src={img} 
                  alt={`Rental equipment ${i + 1}`} 
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
          className="bg-zinc-100 dark:bg-zinc-900 rounded-none p-8 md:p-12 shadow-xl mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Pickup or Delivery Options</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">Our rental equipment can be provided through:</p>
              <ul className="space-y-4">
                {deliveryOptions.map((option, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={20} />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400 italic">These packages are designed for clients who want a professional setup without full production services</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Custom Packages</h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                If your event requires a different setup or additional equipment, we can help create a custom rental package.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-8">
                To discuss custom packages or check equipment availability, please contact us directly by phone and our team will assist you.
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
