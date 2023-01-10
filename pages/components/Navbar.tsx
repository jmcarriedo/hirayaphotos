import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react'
import NavItem from "./Navitem"
import { motion } from 'framer-motion'

const menuList = [
    {text: "Home", href:"/"},
    {text: "Works", href:"/works"},
    {text: "Services", href:"/services"},
    // {text: "About Us", href:"/about"},
    {text: "Book Us", href:"/book"},
]

const Navbar = () => {
    // const [navActive, setNavActive] = useState<any | null>(null);
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <header>
            <motion.div  
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}
            >
                <nav className={`nav ${navActive ? "active" : ""}`}>
                        <Link href={"/"}>
                            <a onClick={() => setActiveIdx(0)}>
                                <div className="logo">  
                                    <Image src="/hiraya.svg" alt="Hiraya Moments Logo" width={50} height={50} /> 
                                    Hiraya Photos
                                </div>
                            </a>
                        </Link>
                    
                    
                    <div onClick={() => setNavActive(!navActive)}
                            className={`nav__menu-bar ${navActive ? "active" : ""}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className={`nav__menu-list ${navActive ? "active" : ""}`}>
                            {menuList.map((menu, idx) => (
                            <div onClick={() => {setActiveIdx(idx); setNavActive(false);}}
                                    key={menu.text}
                                >
                                    <NavItem {...menu} active={idx === activeIdx}/>
                            </div>
                        ))}
                    </div>
                </nav>
            </motion.div>
        </header>
    )
}

export default Navbar