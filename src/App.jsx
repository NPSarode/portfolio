import './App.css';
import React, { lazy, Suspense } from 'react';

// Lazy load components
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./pages/Footer'));
const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

function App() {
  return (
    <div className='bg-[#32353c] min-h-[100vh] scrollbar-thin w-full'>
      <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
