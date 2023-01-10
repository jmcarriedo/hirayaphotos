// import type { NextPage } from 'next'
import Link from "next/link"
import styles from "../../styles/Nav.module.css"

type navItem = {
    text: string,
    href: string, 
    active: boolean
}

// const Navitem = ({ text, href, active }: {text:string, href:string, active:boolean}) => {
// const Navitem = ({ text, href, active }: any) => {
const NavItem = ({text, href, active}: navItem) => {
  return (
   <>
        { text == "Book Us" ?
            <Link href={href}>
                <button className={`nav__button ${active ? "active" : ""}`}>
                    {text}
                </button>    
            </Link>
            :
            <Link href={href}>
                {/* <a className={`nav__item ${active ? "active" : ""}`}>
                    {text}
                </a> */}
                <a className={`nav__link ${active ? "active" : ""}`}>
                    {text}
                </a>
            </Link>
        }
   </>
  )
}

export default NavItem