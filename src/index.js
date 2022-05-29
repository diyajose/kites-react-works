import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Topbar from './components/topbar';
import Hero from './components/hero';
import About from './components/about';
import Special from './components/special';
import Events from './components/events';
import Reach from './components/reach';
import Whyus from './components/whyus';
import Impact from './components/impact';
import Gallery from './components/gallery';
import Latestnews from './components/latestnews';
import News from './components/news';
import Testimonials from './components/testimonials';
import Chefs from './components/chefs';
import SusGoals from './components/sustGoals';
import OurPartners from './components/ourPartners';
import Contact from './components/contact';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topbar />
    <Header />
    <Hero />
    <About />
    <Special />
    <Events />
    <Reach />
    <Whyus/>
    <Impact/>
    <Gallery/>
    <Latestnews/>
    <News/>
    <Testimonials/>
    <Chefs/>
    <SusGoals/>
    <OurPartners/>
    <Contact/>
    <Footer/>
   

  </React.StrictMode>
);
