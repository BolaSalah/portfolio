"use client"
import Image from "next/image";
import { useState } from "react";
import Nav from "@/Components/Nav";
import MobileNav from './../Components/MobileNav';
import Hero from './../Components/Hero';
import About from './../Components/About';

export default function Home() {
  const [ nav, setNav ] = useState(false);
  const openNav = () => setNav( true );
  const closeNav = () => setNav(false);

  return (
    <div className=" font-primary">
      {/* Navbar */}
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Nav openNav={openNav} />
      
      {/* hero section */}
      <Hero />

      {/* about section */}
      <About />
    </div>
  );
}
