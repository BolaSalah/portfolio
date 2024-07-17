'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Nav from '@/Components/Nav';
import MobileNav from './../Components/MobileNav';
import Hero from './../Components/Hero';
import About from './../Components/About';
import Projects from '@/Components/Projects';
import Skills from '@/Components/Skills';
import ContactUs from '@/Components/ContactUs';
import Footer from '@/Components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [nav, setNav] = useState<boolean>(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect( () => {
    
    // AOS library for animation
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 500,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className=' font-primary overflow-x-hidden'>
      {/* Navbar */}
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />

      {/* hero section */}
      <Hero />

      {/* about section */}
      <About />

      {/* Projects section */}
      <Projects />

      {/* Skills section */}
      <Skills />

      {/* ContactUs section */}
      <ContactUs />

      {/* Footer section */}
      <Footer />
    </div>
  );
}
