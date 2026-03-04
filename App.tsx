
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CountryShowcases from './pages/CountryShowcases';
import TargetSectors from './pages/TargetSectors';
import EventExperience from './pages/EventExperience';
import Registration from './pages/Registration';
import Contact from './pages/Contact';

import Visitors from './pages/Visitors';
import Exhibitors from './pages/Exhibitors';
import Sponsors from './pages/Sponsors';
import Agenda from './pages/Agenda';
import Speakers from './pages/Speakers';
import Venue from './pages/Venue';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Failed from './pages/Failed';
import News from './pages/News';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/countries" element={<CountryShowcases />} />
          <Route path="/sectors" element={<TargetSectors />} />
          <Route path="/experience" element={<EventExperience />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failed" element={<Failed />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <SpeedInsights />
      </Layout>
    </Router>
  );
};

export default App;
