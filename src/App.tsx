/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Weddings from './pages/services/Weddings';
import RentalPackages from './pages/services/RentalPackages';
import CorporateEvents from './pages/services/CorporateEvents';
import PartiesSocialEvents from './pages/services/PartiesSocialEvents';
import LiveShowsFullProduction from './pages/services/LiveShowsFullProduction';
import CulturalEvents from './pages/services/CulturalEvents';
import FloatingContact from './components/FloatingContact';
import AIWidget from './components/AIWidget';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark'); // Default to dark mode
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans transition-colors duration-300 relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/weddings" element={<Weddings />} />
            <Route path="/services/rental-packages" element={<RentalPackages />} />
            <Route path="/services/corporate-events" element={<CorporateEvents />} />
            <Route path="/services/parties-social-events" element={<PartiesSocialEvents />} />
            <Route path="/services/live-shows-full-production" element={<LiveShowsFullProduction />} />
            <Route path="/services/cultural-events" element={<CulturalEvents />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIWidget />
        <FloatingContact />
      </div>
    </Router>
  );
}
