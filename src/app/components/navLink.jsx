import React from 'react'
import Link from "next/link";
const NavLink = ({href,title}) => {
  return (
    <Link 
    href={href} 
    scroll={true}
    className='block rounded-full px-4 py-2 transition-all duration-500 hover:text-purple-200 hover: hover:shadow-lg hover:shadow-purple-800 '>{title}
    
    </Link>
  );
};

export default NavLink