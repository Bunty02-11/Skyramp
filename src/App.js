import React, { useEffect } from 'react'
import Home from './Components/Mainpahe/Home'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Services from './Components/Services/Services'
import Project from './Components/Project/Project'
import Projectdetails from './Components/Project/Projectdetails'

function App() {
  useEffect(() => {
    const loadScripts = () => {
      const scriptFiles = [
        'assets/js/vendor/jquery.js',
        'assets/js/three.js',
        'assets/js/gsap.js',
        'assets/js/gsap-scroll-to-plugin.js',
        'assets/js/gsap-scroll-trigger.js',
        'assets/js/gsap-scroll-smoother.js',
        'assets/js/gsap-split-text.js',
        'assets/js/hover-effect.umd.js',
        'assets/js/vendor/waypoints.js',
        'assets/js/bootstrap-bundle.js',
        'assets/js/ajax-form.js',
        'assets/js/imagesloaded-pkgd.js',
        'assets/js/isotope-pkgd.js',
        'assets/js/jarallax.js',
        'assets/js/magnific-popup.js',
        'assets/js/nice-select.js',
        'assets/js/purecounter.js',
        'assets/js/range-slider.js',
        'assets/js/jequery-knob.js',
        'assets/js/jquery-appear.js',
        'assets/js/wow.js',
        'assets/js/slick.js',
        'assets/js/swiper-bundle.js',
        'assets/js/main.js',
      ];

      scriptFiles.forEach(file => {
        const script = document.createElement('script');
        script.src = file;
        script.async = true;
        document.body.appendChild(script);
      });
    };

    loadScripts();

    // Cleanup function to remove added scripts if component unmounts
    return () => {
      const scripts = document.querySelectorAll('script[src^="assets/js/"]');
      scripts.forEach(script => {
        document.body.removeChild(script);
      });
    };
  }, []); // empty dependency array means this effect runs only once after the component mounts

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/service' element={<Services/>} />
          <Route exact path='/project' element={<Project/>} />
          <Route exact path='/projectdetails' element={<Projectdetails/>} />
          <Route exact path='/contact' element={<Contact/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
