import React from 'react';

// Components import
import Header from './components/Header';
import Statistics from './components/StatisticsSection';
import InfoSection from './components/InfoSection';
import CompanyInfoSection from './components/CompanyInfoSection';
import Banner from './components/Banner';
import Footer from './components/Footer';

// import global context
import { useGlobalContext } from './context/context';

// Assets for Info Section imports
import coupleMobileImg from './assets/couple-enjoying-day.jpeg';
import coupleDeskopImg from './assets/couple-desktop.jpeg';
import geersMobileImg from './assets/geers-store.jpeg';
import geersDesktopImg from './assets/geers-store-desktop.jpeg';
import { section1, section2 } from './data';

function App() {
  const { isTablet } = useGlobalContext();

  return (
    <>
      <Header />
      <Statistics />
      <InfoSection
        image={isTablet ? coupleDeskopImg : coupleMobileImg}
        imgDesc="Couple talking"
        texts={section1}
        type={1}
      />
      <InfoSection
        image={isTablet ? geersDesktopImg : geersMobileImg}
        imgDesc="Geers Store"
        texts={section2}
        type={2}
      />
      <CompanyInfoSection />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
