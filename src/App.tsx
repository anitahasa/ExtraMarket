/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeeklyOffers from './components/WeeklyOffers';
import Recipes from './components/Recipes';
import TrustSignals from './components/TrustSignals';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <WeeklyOffers />
        <Recipes />
        <TrustSignals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


