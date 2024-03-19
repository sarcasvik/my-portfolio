"use client";
import React,{useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import NavLink from './navLink';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import MenuOverlay from './menuOverlay';
import { motion } from "framer-motion";
const navLinks = [
    {
        title:"About",
        path:"#about"
    },
    {
        title:"Projects",
        path:"#projects"
    },
    {
        title:"Contact",
        path:"#contact"
    },
];
const navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#3a015c] bg-opacity-80'>
        <div className='flex items-center flex-wrap justify-between mx-auto px-4 py-2'>
            <Link scroll={true} className='flex items-center' href={"#hero"}><Image className='rounded-full' src="/images/bitmoji.png" alt = "logo" width={55} height={60}/><div className="size px-2 font-extrabold text-lg font-mono md:text-xl lg:text-2xl"><motion.h1 whileHover={{scale: 1.05}}>SATVIK&apos;s PORTFOLIO</motion.h1></div></Link>
            {/* mobile view */}
            <div className="mobile-menu block md:hidden font-semibold font-mono">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-2 py-2 text-slate-200"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200 "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
            {/* desktop view */}
            <div className='menu hidden md:block md:w-auto font-semibold font-mono text-lg' id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default navbar