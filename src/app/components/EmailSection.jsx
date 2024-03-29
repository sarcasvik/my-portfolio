"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import gmailIcon from "../../../public/images/gmail-icon.svg";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
const EmailSection = () => {
  
  //const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId =process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId =process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey =process.env.NEXT_PUBLIC_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_subject: subject,
      from_email: email,
      to_name: 'Satvik',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setSubject('');
        setEmail('');
        setMessage('');
        document.getElementById("email-form").reset();
        toast.success('Thanks for your message, I will get back to you shortly!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Error sending email. Please try again later.');
      });
    }
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 mt-10 md:mt-24 py-20 md:py-28 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-2xl md:text-3xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-justify">
          {" "}
          I&apos;m always looking for exciting opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com/sarcasvik">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/satvik-maheshwari-7857441a6/"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link
            className="ml-1"
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=satvikmaheshwari10@gmail.com"
          >
            <Image src={gmailIcon} width={48} height={48} alt="gmail Icon" />
          </Link>
        </div>
      </div>
      <div>
        {/* form starts here  */}
        <form className="flex flex-col" onSubmit={handleSubmit} id="email-form">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm md:text-base font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className="bg-[#09020ea1] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="viksample@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm md:text-base mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value)
              }}
              className="bg-[#09020ea1] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm md:text-base mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
              className="bg-[#09020ea1] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg min-h-36 block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            type="submit"
            className="text-white font-medium py-2.5 px-5 rounded-lg mx-auto bg-[#11001c] w-60 hover:bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 border hover:border-black  transition-all flex justify-center align-middle content-center"
          >
            Send Message
          </motion.button>
        </form>
        <Toaster />
      </div>
    </section>
  );
};

export default EmailSection;
