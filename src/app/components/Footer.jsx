import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border min-w-full border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container min-w-full p-6 flex justify-between">
      <Link scroll={true} className='flex items-center' href={"#hero"}><Image className='rounded-full' src="/images/bitmoji.png" alt = "logo" width={45} height={45}/><div className="size pl-2 font-extrabold text-sm font-mono md:text-lg lg:text-xl"><h1>SATVIK&apos;s PORTFOLIO</h1></div></Link>
        <div className="flex flex-col justify-center align-center content-center	">
            <p className="text-slate-500 text-sm md:text-lg justify-center align-center">Contact directly at satvikmaheshwari10@gmail.com</p>
            <p className="text-slate-500 text-sm  justify-center align-center text-center">© Copyright 2024 . Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;