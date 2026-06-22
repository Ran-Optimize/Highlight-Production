import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, Settings2, Heart, Music, Users, Layers, Briefcase, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';
import YouTubeBackground from '../components/YouTubeBackground';
import MorphingSection from '../components/MorphingSection';
import EventVisionSection from '../components/EventVisionSection';
import SectionLaserEffect from '../components/SectionLaserEffect';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <YouTubeBackground 
        desktopVideoId="7anuB_Ykg7g" 
        mobileVideoId="fVB6--SPXTU"
        desktopRatio={16/9}
        mobileRatio={9/16}
        overlayOpacity="opacity-20"
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 uppercase drop-shadow-lg flex flex-col items-center" style={{ fontFamily: "'Assistant', sans-serif" }}>
              <div className="h-32 md:h-48 lg:h-64 w-full mb-4"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-white text-xl md:text-3xl lg:text-4xl drop-shadow-md">Where Production Becomes Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-100 mb-10 font-light max-w-3xl mx-auto drop-shadow-md">
              audio | lighting | visual | staging | performance
            </p>
            <div className="flex items-center justify-center">
              {/* Desktop Contact Form Link */}
              <Link to="/contact" className="hidden md:flex text-orange-700 hover:text-orange-600 font-bold uppercase tracking-widest transition-colors items-center justify-center gap-2 text-xl">
                Get a Quote <ArrowRight size={20} />
              </Link>
              {/* Mobile SMS/Call */}
              <div className="flex md:hidden flex-col sm:flex-row gap-6 items-center">
                <a href="sms:+12139278653" className="text-orange-500 hover:text-orange-400 font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 text-xl">
                  Send SMS <ArrowRight size={20} />
                </a>
                <a href="tel:+12139278653" className="text-white hover:text-zinc-300 font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 text-xl">
                  <Phone size={20} /> Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </YouTubeBackground>

      {/* 1.5 Trusted By Partners */}
      <section className="py-12 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">Trusted By Industry Leaders</h3>
        </div>
        
        {/* Gradient Fades for Marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>

        <div className="relative w-full flex overflow-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center w-max group-hover:[animation-play-state:paused]">
            {/* Duplicate logos for infinite effect - using 4 arrays to ensure it's wide enough to loop seamlessly */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-10 md:gap-16 items-center px-5 md:px-8">
                {[
                  { src: "https://i.postimg.cc/ZWV85g7g/yzwb-ll-sm.png", alt: "Method" },
                  { src: "https://i.postimg.cc/CxdkKLMn/2.png", alt: "LONG FENG Art Car" },
                  { src: "https://i.postimg.cc/Kv6jHZct/sound-logo-darko.avif", srcDark: "https://i.postimg.cc/6qRq9SYq/sound-logo-web-sm.png", alt: "Sound Night Club" },
                  { src: "https://i.postimg.cc/qvZNx8hq/yzwb-ll-sm-2026-03-18T132609-633.png", alt: "Raspoutine Nightclub" },
                  { src: "https://i.postimg.cc/kMyFFbTP/68ca06d3277d0d6779d6940e-ec65a0afb368a181d5f6ea946c86abcf4ec9e1df.png", alt: "The Goldstein Residence" },
                  { src: "https://i.postimg.cc/rwzxpFy4/5.png", alt: "Stranger Than" }
                ].map((logo, j) => (
                  <div key={j} className="w-28 md:w-40 h-16 md:h-20 flex items-center justify-center">
                    {logo.srcDark ? (
                      <>
                        <img 
                          src={logo.src} 
                          alt={logo.alt} 
                          className="max-w-full max-h-full object-contain transition-all duration-300 dark:hidden" 
                          referrerPolicy="no-referrer" 
                        />
                        <img 
                          src={logo.srcDark} 
                          alt={logo.alt} 
                          className="max-w-full max-h-full object-contain transition-all duration-300 hidden dark:block" 
                          referrerPolicy="no-referrer" 
                        />
                      </>
                    ) : (
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="max-w-full max-h-full object-contain transition-all duration-300" 
                        referrerPolicy="no-referrer" 
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Social Proof Section */}
      <section className="py-12 bg-zinc-100 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { number: '3,874+', label: 'Events Executed' },
              { number: '15+', label: 'Years Experience' },
              { number: '100%', label: 'Precision Rate' },
              { number: '400,000+', label: 'People had a really good time' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2 font-display tracking-tight">{stat.number}</span>
                <span className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Us (Short) */}
      <section className="py-16 bg-white dark:bg-black relative overflow-hidden" style={{ fontFamily: "'Assistant', sans-serif" }}>
        <SectionLaserEffect color1="cyan" color2="blue" delayOffset={0} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[1.35rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-zinc-900 dark:text-white tracking-tight whitespace-nowrap">Elevating Events in Los Angeles</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                Highlight Productions Inc. is a Los Angeles based technical production company delivering full scale event environments with precision and professionalism.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                From intimate private gatherings to large ballroom celebrations and corporate productions, we design and execute integrated systems for sound, lighting, visuals, staging, and performance.
              </p>
              <p className="text-xl font-medium text-zinc-900 dark:text-white italic border-l-4 border-orange-500 pl-4">
                "Every system is engineered. Every detail is considered. Every event is executed with intention."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-none overflow-hidden"
            >
              <img src="https://i.postimg.cc/ZnW90r0w/AK8A0434-Enhanced-NR.jpg" alt="Production Setup" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">Services</h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">Comprehensive technical solutions tailored to your specific event requirements</p>
          </div>
          
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { title: 'Rental Packages', desc: 'High-end equipment rentals for industry professionals.', link: '/services/rental-packages' },
                { title: 'Weddings', desc: 'Elegant lighting and pristine audio for your special day.', link: '/services/weddings' },
                { title: 'Live Shows & Full Production', desc: 'End-to-end technical design and execution for large events.', link: '/services/live-shows-full-production' },
                { title: 'Cultural Events', desc: 'Lighting & Production for Elevated Celebrations.', link: '/services/cultural-events' },
                { title: 'Corporate', desc: 'Flawless AV for conferences and brand activations.', link: '/services/corporate-events' },
                { title: 'Parties & Social Events', desc: 'Dynamic environments for private celebrations.', link: '/services/parties-social-events' },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] aspect-square bg-white dark:bg-zinc-950 p-6 rounded-none border border-zinc-200 dark:border-zinc-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 group cursor-pointer hover:shadow-2xl hover:shadow-orange-500/10 relative overflow-hidden flex flex-col items-center justify-center text-center"
                  onClick={() => window.location.href = service.link}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-zinc-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">{service.desc}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* 5.5 Morphing Icons Section */}
      <MorphingSection />

      {/* 5.6 Event Vision Section (Magic Lens) */}
      <EventVisionSection />

      {/* 6. Our Approach */}
      <section className="relative w-full py-12 md:py-16 flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1540039155732-68473638epc?q=80&w=2070&auto=format&fit=crop" alt="Our Approach Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Our Approach</h2>
            <div className="flex flex-col items-center text-center space-y-6 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              <p className="text-2xl md:text-3xl font-medium max-w-none md:whitespace-nowrap leading-relaxed">
                We believe production should support the experience, not distract from it
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 w-full text-center py-4">
                <div className="bg-black/40 p-6 md:p-8 border border-white/20 backdrop-blur-md hover:border-orange-500 transition-colors duration-300">
                  <h3 className="text-orange-500 font-bold mb-2 uppercase tracking-widest text-sm">Design</h3>
                  <p className="text-zinc-200 font-light text-lg">Begins with understanding your venue and flow</p>
                </div>
                <div className="bg-black/40 p-6 md:p-8 border border-white/20 backdrop-blur-md hover:border-orange-500 transition-colors duration-300">
                  <h3 className="text-orange-500 font-bold mb-2 uppercase tracking-widest text-sm">Execution</h3>
                  <p className="text-zinc-200 font-light text-lg">Follows disciplined technical planning</p>
                </div>
                <div className="bg-black/40 p-6 md:p-8 border border-white/20 backdrop-blur-md hover:border-orange-500 transition-colors duration-300">
                  <h3 className="text-orange-500 font-bold mb-2 uppercase tracking-widest text-sm">Performance</h3>
                  <p className="text-zinc-200 font-light text-lg">Integrates seamlessly into the environment</p>
                </div>
              </div>

              <p className="font-bold text-white text-xl md:text-2xl max-w-4xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                Whether hosting an intimate gathering or a large celebration, every project receives the same level of precision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Private Event Systems */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
        <SectionLaserEffect color1="emerald" color2="cyan" delayOffset={1} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Private Event Systems</h2>
              <p className="text-orange-600 dark:text-orange-400 font-medium mb-8">Intimate Event System (20–50 Guests)</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Compact touring-grade sound system',
                  'Ambient lighting wash',
                  'Wireless microphone',
                  'Professional cabling and calibration',
                  'Delivery, installation, and strike included'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-zinc-500 italic">Refined production, scaled for private environments</p>
            </motion.div>
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl">
              <img src="https://i.postimg.cc/mgGnyxMs/ALN06094.jpg" alt="Private Event" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Celebration Event Systems */}
      <section className="py-16 bg-white dark:bg-black relative overflow-hidden">
        <SectionLaserEffect color1="red" color2="amber" delayOffset={2} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start flex-col-reverse md:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Celebration Event System</h2>
              <p className="text-orange-600 dark:text-orange-400 font-medium mb-8">(50–150+ Guests)</p>
              <ul className="space-y-4 mb-8">
                {[
                  'L-Acoustics sound system',
                  'Subwoofer reinforcement',
                  'Dance floor lighting design',
                  'Wireless microphones',
                  'Structured installation and power management',
                  'Delivery and professional setup',
                  'Optional on-site technician'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-zinc-500 italic">A complete private event production solution, engineered with clarity and control</p>
            </motion.div>
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl">
              <img src="https://i.postimg.cc/xC5m0vsj/IMG-1568.jpg" alt="Celebration Event" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Why Highlight */}
      <section className="py-16 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Highlight production</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">The difference between equipment and production</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              'Concert-grade sound systems',
              'Intelligent lighting design',
              'Engineered signal flow & system control',
              'Professional touring technicians',
              'Flawless installation & event execution'
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-800/30 backdrop-blur-sm p-8 rounded-none border-t border-zinc-700 hover:border-orange-500 transition-colors duration-300 flex flex-col justify-center"
              >
                <h4 className="font-medium text-lg tracking-wide text-center">{feature}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact CTA */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-8 md:py-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zinc-900 dark:text-white tracking-tighter uppercase">Tell us about your event</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 uppercase tracking-widest text-sm font-semibold">Venue Guest count Vision</p>
            <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-12 max-w-2xl mx-auto font-light">We will design a production plan aligned with your space and scale Luxury execution begins with careful planning</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {/* Desktop Contact Form Link */}
              <Link to="/contact" className="hidden md:flex text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest hover:text-orange-700 dark:hover:text-orange-300 transition-colors items-center justify-center gap-2 text-xl">
                Get a Quote <ArrowRight size={20} />
              </Link>
              {/* Mobile SMS/Call */}
              <div className="flex md:hidden flex-col gap-6 items-center w-full">
                <a href="sms:+12139278653" className="w-full text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest hover:text-orange-700 dark:hover:text-orange-300 transition-colors flex items-center justify-center gap-2 text-xl border border-orange-600/30 py-3 rounded-none">
                  Send SMS <ArrowRight size={20} />
                </a>
                <a href="tel:+12139278653" className="w-full text-zinc-900 dark:text-white font-bold uppercase tracking-widest hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center justify-center gap-2 text-xl border border-zinc-200 dark:border-zinc-800 py-3 rounded-none">
                  <Phone size={20} /> Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
