import { useState } from 'react';
import { MessageSquare, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [eventType, setEventType] = useState('');
  const [guestCount, setGuestCount] = useState('');

  const eventTypes = ['Wedding', 'Corporate Event', 'Live Concert', 'Private Party'];
  const guestCounts = ['Under 50', '50 - 150', '150 - 500', '500+'];

  const handleComplete = (count: string) => {
    setGuestCount(count);
    setStep(2);
  };

  const getRecommendation = () => {
    if (guestCount === 'Under 50') return 'Intimate Event System';
    if (guestCount === '50 - 150') return 'Celebration Event System';
    return 'Full Production System';
  };

  const handleSMS = () => {
    const rec = getRecommendation();
    const message = `Hi Highlight Productions, I used your AI planner. I'm organizing a ${eventType} for ${guestCount} guests. It recommended the ${rec}. Can we discuss the details?`;
    window.open(`sms:+12139278653?body=${encodeURIComponent(message)}`, '_self');
    setIsOpen(false);
    setTimeout(() => { setStep(0); setEventType(''); setGuestCount(''); }, 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-none shadow-2xl z-50 flex items-center justify-center transition-transform hover:scale-110"
      >
        <Sparkles size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-40 right-6 w-80 bg-white dark:bg-zinc-900 rounded-none shadow-2xl z-50 overflow-hidden border border-zinc-200 dark:border-zinc-800"
          >
            <div className="bg-orange-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                <span className="font-semibold">AI Production Planner</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={18} /></button>
            </div>

            <div className="p-6 min-h-[250px] flex flex-col justify-center">
              {step === 0 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-lg font-medium mb-4 text-zinc-900 dark:text-white">What type of event are you planning?</h3>
                  <div className="flex flex-col gap-2">
                    {eventTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => { setEventType(type); setStep(1); }}
                        className="text-left px-4 py-2 rounded-none bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-100 dark:hover:bg-orange-700/30 transition-colors text-zinc-800 dark:text-zinc-200"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-lg font-medium mb-4 text-zinc-900 dark:text-white">What is your estimated guest count?</h3>
                  <div className="flex flex-col gap-2">
                    {guestCounts.map(count => (
                      <button
                        key={count}
                        onClick={() => handleComplete(count)}
                        className="text-left px-4 py-2 rounded-none bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-100 dark:hover:bg-orange-700/30 transition-colors text-zinc-800 dark:text-zinc-200"
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-none flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">Perfect!</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm">
                    Based on your {eventType} for {guestCount} guests, we recommend our <strong className="text-orange-600 dark:text-orange-600">{getRecommendation()}</strong>.
                  </p>
                  <button
                    onClick={handleSMS}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 rounded-none flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare size={18} />
                    Send SMS to Discuss
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
