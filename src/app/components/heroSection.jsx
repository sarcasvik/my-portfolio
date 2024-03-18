import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import {motion} from "framer-motion";
const heroSection = () => {
  return (
    <section id="hero mt-24 ">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500">Hello I&apos;m </span>
            <br />
            
            <div className="mt-5">
              <TypeAnimation
                sequence={[
                  "Satvik Maheshwari",
                  1000,
                  "Web Developer",
                  1000,
                  "Software Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>

          <p className="text-[#ADB7BE] text-lg lg:text-xl sm:text-justify mb-6">
            I am a Software Dev specializing in building applications. I have a passion for Web development and design, moreover my work experience also includes scripting and Database Management.
          </p>
          
          <Link href="#contact" scroll={true} className="px-6 py-3 rounded-full mr-4 bg-[#11001c] hover:bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 border transition-all duration-700 text-white ">Contact Me</Link>
          <Link href="https://drive.google.com/file/d/1It6tdymxL5inR7bF1FfUEeDUujDJbkdV/view?usp=sharing" target="_blank" download={true} className="px-6 py-3 rounded-full mr-4 bg-[#11001c] hover:bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 border text-white">Download CV</Link>
        
        </motion.div>
        

        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
         className="col-span-5 mt-6 lg:ml-6 place-self-center">
            <div className="rounded-xl height-300 width-300">
                <Image
                // layout="responsive"
                className="vikimg h-auto max-w-lg transition-all duration-500 rounded-2xl cursor-imageurl filter sm:grayscale  hover:grayscale-0 shadow-lg  shadow-cyan-500 " src="/images/vik.png" alt="vik" height= {370 } width={370}/>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default heroSection;