import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border min-w-full border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container min-w-full p-6 flex flex-col gap-5 md:gap-0 items-center md:flex-row md:justify-between">
          <Link scroll={true} className='flex items-center' href={"#hero"}><Image className='rounded-full' src="/images/bitmoji.png" alt = "logo" width={45} height={45}/><div className="size pl-2 font-extrabold text-sm font-mono md:text-lg lg:text-xl"><h1>SATVIK&apos;s PORTFOLIO</h1></div></Link>
          <p className="text-slate-500 text-sm lg:text-lg justify-center align-center text-center">Contact via mail: satvikmaheshwari10@gmail.com</p>
          <p className="text-slate-500 text-sm  justify-center align-center text-center">© Copyright 2024 . Made with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;