"use client";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import navbar from "./components/navbar";
import heroSection from "./components/heroSection";
import aboutSection from "./components/aboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#6a00f4", "#f20089"]
  );
  return (
    <main className="flex min-h-screen flex-col bg-[#11001c] ">
    {navbar()}
    <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
          background,
          position: "sticky",
          top: 66,
          width: "100%",
          height: "5px",
          zIndex:9,
          opacity: 0.9
        }}
      />
    <div className="container mx-auto px-4 sm:px-8 py-2 mt-20 lg:mt-40">
    {heroSection()}
    {aboutSection()}
    {ProjectsSection()}
    {EmailSection()}
    </div>   
    {Footer()}
    </main>
  );
}
