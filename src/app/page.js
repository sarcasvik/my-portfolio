"use client";
import Image from "next/image";
//import { AnimatePresence } from "framer-motion";
import navbar from "./components/navbar";
import heroSection from "./components/heroSection";
import aboutSection from "./components/aboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#11001c]">
    {navbar()}
    <div className="container mx-auto px-8 py-2 lg:mt-40">
    {heroSection()}
    {aboutSection()}
    {ProjectsSection()}
    {EmailSection()}
    </div>   
    {Footer()}
    </main>
  );
}
