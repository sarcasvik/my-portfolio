import React from "react";
import { motion } from "framer-motion";
const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 "
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl m-1 cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;