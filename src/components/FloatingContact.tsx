import { Phone, MessageSquare, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Mobile Actions (SMS & Call) */}
      <a
        href="sms:+12139278653"
        className="md:hidden bg-orange-700 hover:bg-orange-600 text-white p-4 rounded-none shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
        title="Send SMS"
      >
        <MessageSquare size={28} />
      </a>
      <a
        href="tel:+12139278653"
        className="md:hidden bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black p-4 rounded-none shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
        title="Call Us"
      >
        <Phone size={28} />
      </a>

      {/* Desktop Actions (Contact Form & Email) */}
      <Link
        to="/contact"
        className="hidden md:flex bg-orange-700 hover:bg-orange-600 text-white p-4 rounded-none shadow-2xl items-center justify-center transition-transform hover:scale-110"
        title="Contact Us"
      >
        <MessageSquare size={28} />
      </Link>
      <a
        href="mailto:office@highlightprod.com"
        className="hidden md:flex bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black p-4 rounded-none shadow-2xl items-center justify-center transition-transform hover:scale-110"
        title="Email Us"
      >
        <Mail size={28} />
      </a>
    </div>
  );
}
