import navstyles from '../styles/Navbar.module.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { NavbarData } from './NavbarData';
import Link from 'next/link'


function Navbar({children}) {
const [navbar, setnavbar] = useState(false);

const shownavbar = () => setnavbar(!navbar);

return (
<>
  <IconContext.Provider value={{ color: '#fff' }}>
    <div className={navstyles.navmain}>
      <div className={navstyles.navbar}>
        <Link href='#' className={navstyles.menubar}>
        <a>

          <img src='/menu.svg' className={navstyles.menubutton} onClick={shownavbar} />
        </a>
        </Link>
      </div>
      <div className={navstyles.fullnav}>
        {NavbarData.map((item, index) => {
        return (

        <Link href={item.path}><a>

          <span className={navstyles.maintitle}>{item.title}</span></a>
        </Link>

        );
        })}
      </div>
    </div>

    <nav className={navbar ? `${navstyles.navmenu} ${navstyles.active}` : navstyles.navmenu}>
      <ul className={navstyles.navmenuitems} onClick={shownavbar}>
        <li className={navstyles.nabvartoggle}>
          <Link href='#' className={navstyles.menubar}><a>
            <img src='/close.svg' className={navstyles.closebutton} />
            {/*
            <AiIcons.AiOutlineClose /> */}
          </a>
          </Link>
        </li>
        {NavbarData.map((item, index) => {
        return (
        <li key={index} className={navstyles.navtext}>
          <Link href={item.path}><a>
            {item.icon}
            <span className={navstyles.title}>{item.title}</span></a>
          </Link>
        </li>
        );
        })}
      </ul>
    </nav>
  </IconContext.Provider>
</>
);
}

export default Navbar;