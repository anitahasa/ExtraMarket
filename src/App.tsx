/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import WeeklyOffers from './components/WeeklyOffers';
import OffersGrid from './components/OffersGrid';
import Recipes from './components/Recipes';
import TrustSignals from './components/TrustSignals';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <WeeklyOffers />
        <Categories onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        <OffersGrid selectedCategory={selectedCategory} />
        <Recipes />
        <TrustSignals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


