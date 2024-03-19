"use client";
import React, { useTransition, useState }  from 'react'
import Image from 'next/image';
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex sm:flex-row flex-wrap gap-4">
        <ul className="list-disc px-2 ">
          <li className='hover:text-pink-700 text-lg'>Web Development</li>
          <ul className="list-disc px-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.JS</li>
            <li>Next.Js</li>
            <li>Bubble.io</li>
          </ul>
        </ul>
        <ul className="list-disc px-2 ">
          <li className='hover:text-pink-700 text-lg'>Languages</li>
          <ul className="list-disc px-2">
            <li>C/C++</li>
            <li>Python</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </ul>
        <ul className="list-disc px-2 ">
          <li className='hover:text-pink-700 text-lg'>Tools and OS</li>
          <ul className="list-disc px-2">
            <li>Linux</li>
            <li>Windows</li>
            <li>Git-Github</li>
            <li>AWS</li>
            <li>PowerBI</li>
          </ul>
        </ul>
      </div>
    ),
  },
  {
    title: "Work Exp",
    id: "work",
    content: (
      <ul className="list-disc pl-2 text-justify">
       <li className='hover:text-pink-700 text-lg'>Siemens EDA, <span className='text-slate-500 text-sm'>MTS Intern</span></li>
        <ul className="list-disc pl-2"><li> Created a C-shell script in Linux for PostgreSQL database management across multiple emulator systems, boosting efficiency.</li>
        <li>Built a C++ application with PostgreSQL API (libpqxx) for advanced database manipulation and introduced indexing to enhance emulator performance.</li>
        </ul> 
        <li className='hover:text-pink-700 text-lg'>Ellocent Labs IT Solutions., <span className='text-slate-500 text-sm'>Junior Web Developer</span></li>
        <ul className="list-disc pl-2"><li>Integrated diverse APIs and plugins for optimized website performance and functionality. Implemented AWS S3 connectivity via API Gateway to bolster data management capabilities.</li>
        <li>Collaborated with clients via Jira, translating Figma designs into responsive website features. Utilized Bubble.io platform for superior user experiences and streamlined development.</li>
        </ul>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className='hover:text-pink-700 text-lg'>Thapar Institute of Engineering and Technology, Patiala</li>
        <ul><li>B.E. Computer Engineering</li>
        <li>CGPA - 8.22</li>
        <li>Year - [2020-24]</li></ul>
        <li className='hover:text-pink-700 text-lg'>Vivekanand School, New Delhi</li>
        <ul><li>12th, Science</li>
        <li>Percentage - 94.60%</li><li>Year - [2019-20]</li></ul>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className='hover:text-pink-700 text-lg'>AWS Academy Data Engineer</li>
        <li className='hover:text-pink-700 text-lg' >Cisco Networking Essentials</li>
      </ul>
    ),
  },
];
const aboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white mt-10 md:mt-36 pt-10' id='about'>
        <div className='grid grid-cols-1 content-center md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <motion.div className='hidden sm:block justify-center sm:justify-start ' whileHover={{ scale: 1.025 }} >
            <Image
            className="vikimg2 transition-all duration-500 rounded-2xl cursor-imageurl filter sm:grayscale  hover:grayscale-0  shadow-lg  shadow-pink-500 "
            src="/images/vik2.jpg"
            alt='my image'
            width={400}
            height={400}
            />
          </motion.div>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

            <h2 className='md:text-5xl text-3xl font-bold text-white mb-4 text-center sm:text-left'> About Me</h2>

            <motion.div className='flex sm:hidden justify-center sm:justify-start' whileHover={{ scale: 1.025 }} >
            <Image
            className="vikimg2 transition-all duration-500 rounded-2xl cursor-imageurl filter sm:grayscale  hover:grayscale-0  shadow-lg  shadow-pink-500 mb-10 "
            src="/images/vik2.jpg"
            alt='my image'
            width={400}
            height={400}
            />
          </motion.div>
            <p className='text-base lg:text-lg text-justify'>
            As a dynamic Software/Web developer, I specialize in creating engaging and responsive web applications and I have experience working with HTML, CSS, JavaScript, React.js, Next.js, MySQL, PostgreSQL, Shellscript, and C++. Eager to collaborate and innovate, let's craft exceptional digital experiences together.
            </p>
            <div className="flex flex-row justify-start mt-8 sm:gap-4 sm:text-lg">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate:90 }}>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate:90 }}><TabButton
              selectTab={() => handleTabChange("work")}
              active={tab === "work"}
            >
              {" "}
              Work Exp{" "}
            </TabButton></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate:90 }}><TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate:90 }}>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton></motion.div>
          </div>
          <div className="mt-8 ml-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          </div>
        </div>
    
    </section>
  )
}

export default aboutSection;