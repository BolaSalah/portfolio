"use client"
import Nav from "@/Components/Nav";
import Image from "next/image";
import { useState } from "react";
import MobileNav from './../Components/MobileNav';
import Hero from "./Hero";

export default function Home() {
  const [ nav, setNav ] = useState(false);
  const openNav = () => setNav( true );
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden font-primary">
      {/* Navbar */}
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Nav openNav={openNav} />
      
      {/* hero section */}
      <Hero />
    </div>
  );
}
