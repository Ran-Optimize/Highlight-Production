import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 py-12 border-t border-zinc-200 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="mb-6 block">
            <img 
              src="https://i.postimg.cc/Jn1KMzGt/1.png" 
              alt="Highlight Pro Logo" 
              className="h-28 md:h-32 w-auto object-contain dark:hidden"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://i.postimg.cc/vBQXbZcG/2.png" 
              alt="Highlight Pro Logo" 
              className="h-28 md:h-32 w-auto object-contain hidden dark:block"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm">
            Los Angeles based technical production company delivering full scale event environments with precision and professionalism
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-zinc-500 hover:text-orange-700 transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-zinc-500 hover:text-orange-500 transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="text-zinc-500 hover:text-orange-500 transition-colors">Projects</Link></li>
            <li><Link to="/gallery" className="text-zinc-500 hover:text-orange-500 transition-colors">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-zinc-500">
            <li>Los Angeles, CA</li>
            <li><a href="mailto:office@highlightprod.com" className="hover:text-orange-500 transition-colors">office@highlightprod.com</a></li>
            <li><a href="sms:+12139278653" className="hover:text-orange-500 transition-colors">SMS: +1 (213) 927-8653</a></li>
            <li className="md:hidden"><a href="tel:+12139278653" className="hover:text-orange-500 transition-colors">Call: +1 (213) 927-8653</a></li>
            <li><a href="https://www.instagram.com/highlightprodla" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-900 text-center text-zinc-500 text-sm">
        &copy; 2022 Highlight Production LA. All rights reserved.
      </div>
    </footer>
  );
}
