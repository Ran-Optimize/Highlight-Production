import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import VimeoBackground from '../components/VimeoBackground';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          // Offset for the fixed navbar
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const servicesData = [
    {
      id: 'rental-packages',
      title: 'Rental Packages',
      description: 'Professional DJ, audio, and lighting equipment for smaller events, DJs, and event organizers who need reliable gear without full production services.',
      link: '/services/rental-packages',
      image: 'https://i.postimg.cc/PJSL5StM/IMG-2233.jpg'
    },
    {
      id: 'weddings',
      title: 'Weddings',
      description: 'Elegant wedding lighting and production. We specialize in transforming wedding venues into unforgettable experiences through professional lighting, sound, and production design.',
      link: '/services/weddings',
      image: 'https://i.postimg.cc/VLFgjwNK/DSC-2249-Enhanced-NR.jpg'
    },
    {
      id: 'live-shows-full-production',
      title: 'Live Shows & Full Production',
      description: 'Professional production for live performances and large-scale events. We provide end-to-end technical design, lighting, sound, staging, and visual production.',
      link: '/services/live-shows-full-production',
      image: 'https://i.postimg.cc/PxphwKzS/ALN07410.jpg'
    },
    {
      id: 'cultural-events',
      title: 'Cultural Events',
      description: 'Lighting & Production for Elevated Celebrations. From intimate gatherings to large-scale celebrations, every setup is designed to match the energy of the room.',
      link: '/services/cultural-events',
      image: 'https://i.postimg.cc/pV5XhVq7/432EE4CA-03E7-4490-B9CB-F96FA6DB2EA6.jpg'
    },
    {
      id: 'corporate',
      title: 'Corporate Events',
      description: 'Reliable technical production for business events. We provide clean and reliable lighting, sound, and staging setups that support presentations and company gatherings.',
      link: '/services/corporate-events',
      image: 'https://i.postimg.cc/qqNtg8gw/DSC09280.jpg'
    },
    {
      id: 'parties-social-events',
      title: 'Parties & Social Events',
      description: 'High-energy lighting, sound & DJ experiences for private events. We create environments that transform private events into unforgettable experiences.',
      link: '/services/parties-social-events',
      image: 'https://i.postimg.cc/bvRqPsY6/IMG-1956.jpg'
    }
  ];

  return (
    <div className="min-h-screen pb-20 bg-zinc-50 dark:bg-black">
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
            Services
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto font-light">
            Comprehensive technical solutions tailored to your specific event requirements. Every system is engineered. Every detail is considered.
          </p>
        </div>
      </VimeoBackground>

      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id} 
              id={service.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white dark:bg-zinc-900 rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 dark:bg-black/40 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-0"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">{service.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-orange-600 dark:text-orange-700 font-semibold hover:text-orange-700 dark:hover:text-orange-600 transition-colors group/link mt-auto"
                >
                  Learn More 
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
