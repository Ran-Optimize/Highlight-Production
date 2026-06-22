import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Mail, Phone, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dateUnknown, setDateUnknown] = useState(false);

  const services = [
    "Rental Packages",
    "Weddings",
    "Concert & Live Shows",
    "Mid Tier Events",
    "Full Production",
    "Corporate",
    "Parties & Social Events",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch('https://formspree.io/f/mkoqkwne', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tighter" style={{ fontFamily: "'Assistant', sans-serif" }}>
            Contact Us
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Tell us a little about your event and our team will get back to you shortly to discuss the details and recommend the best solutions
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-6 mb-8">
            <a href="tel:+12139278653" className="inline-flex items-center justify-center gap-2 text-lg md:text-xl font-medium text-zinc-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
              <Phone size={20} className="text-orange-600" />
              +1 (213) 927-8653
            </a>
            <a href="mailto:office@highlightprod.com" className="inline-flex items-center justify-center gap-2 text-lg md:text-xl font-medium text-zinc-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
              <Mail size={20} className="text-orange-600" />
              office@highlightprod.com
            </a>
          </div>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-none p-12 text-center"
          >
            <div className="w-20 h-20 bg-orange-600/20 text-orange-600 rounded-none flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              We have received your request We will contact you within 48 hours
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-none hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-none p-8 md:p-12 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Full Name <span className="text-orange-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-none bg-transparent focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email Address <span className="text-orange-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-none bg-transparent focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Phone Number <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-none bg-transparent focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all dark:text-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Event Date */}
              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Event Date
                </label>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="relative flex-1 w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                      <Calendar size={18} />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      disabled={dateUnknown}
                      required={!dateUnknown}
                      className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-none bg-transparent focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={dateUnknown}
                      onChange={(e) => setDateUnknown(e.target.checked)}
                      className="w-5 h-5 rounded-none border-zinc-300 text-orange-600 focus:ring-orange-600 bg-transparent"
                    />
                    I don't know yet
                  </label>
                </div>
              </div>

              {/* Subject / Service */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Subject (Select Service)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, idx) => (
                    <label key={idx} className="flex items-center gap-3 p-3 border border-zinc-200 dark:border-zinc-800 rounded-none cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <input
                        type="radio"
                        name="subject"
                        value={service}
                        required
                        className="w-4 h-4 text-orange-600 focus:ring-orange-600 border-zinc-300 bg-transparent"
                      />
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Additional Details
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none text-zinc-400">
                    <MessageSquare size={18} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-none bg-transparent focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all dark:text-white resize-none"
                    placeholder="Tell us more about your vision, venue, or specific requirements..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-none transition-colors uppercase tracking-widest"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
