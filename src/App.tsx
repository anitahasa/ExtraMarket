/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import WeeklyOffers from './components/WeeklyOffers';
import Recipes from './components/Recipes';
import Announcements from './components/Announcements';
import About from './components/About';
import Contact from './components/Contact';
import LoyaltyBanner from './components/LoyaltyBanner';
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
        <About />
        <Announcements />
        <Contact />
        <LoyaltyBanner />
      </main>
      <Footer />
    </div>
  );
}
