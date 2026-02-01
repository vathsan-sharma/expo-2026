
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CountryShowcases from './pages/CountryShowcases';
import TargetSectors from './pages/TargetSectors';
import ExhibitorsSponsors from './pages/ExhibitorsSponsors';
import EventExperience from './pages/EventExperience';
import Registration from './pages/Registration';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countries" element={<CountryShowcases />} />
          <Route path="/sectors" element={<TargetSectors />} />
          <Route path="/partners" element={<ExhibitorsSponsors />} />
          <Route path="/experience" element={<EventExperience />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
