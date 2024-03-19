import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";
const NavLink = ({href,title}) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link
      href={href}
      scroll={true}
      className='block rounded-full px-4 py-2 transition-all duration-300 hover:text-purple-100 hover: hover:shadow-sm hover:shadow-purple-800 '>{title}
      </Link>
    </motion.button>
  );
};

export default NavLink