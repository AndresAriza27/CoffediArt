import {Link, Routes, Route} from 'react-router-dom'
import { Home } from './Home'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef, useState } from 'react'
import './Styles/Header.css'
import { Gallery } from './Gallery'
import { SobreNosotros } from './SobreNosotros.jsx'

import iconFb from './Icons/IconFacebook.png'
import iconIg from './Icons/IconInstagram.png'
import iconWp from './Icons/IconWhatsapp.png'
import iconMore from './Icons/IconMore.png'
import { Footer } from './Components/Footer.jsx'

function App() {

  const [open, setOpen] = useState (false);

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  const style = { color: "black" }
  return (
    //Paginas a hacer: 
    //Home (algunos proyectos y carrousels), 
    //About (Mision vision y y demas informacion), 
    //Gallery (Mostrar proyectos (hacer tipo shopping cart)), 
    //Contact (Opciones para hacer pedidos y direccionamiento a redes sociales)
    <div className='App'>
      <header className='header' style={{ position: 'relative' }}>
        <img id='logoheader' src="https://i.ibb.co/9th00hD/LOGOFINALPNG.png" alt="LogoHeader" />
        <nav ref={navRef} className='nav-menu'>
          <Link className='link' to='/'>Página Principal</Link>
          <Link className='link' to='/galeria'>Galeria</Link>
          <Link className='link' to='/sobrenosotros'>Sobre Nosotros</Link>
          {/* <Link className='link' to='/contacto'>¡Contactactanos!</Link> */}
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes style={style}/>
          </button>
        </nav>
        <div className="menu-container">
            <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
              <h3>¡Contactactanos!</h3>
            </div>
          </div>

          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
            <ul>
              <DropdownItem img = {iconFb} text = {"Facebook"} refer = {"https://www.facebook.com/coffeediart?mibextid=ZbWKwL"}/>
              <DropdownItem img = {iconIg} text = {"Instagram"} refer = {"https://www.instagram.com/coffee_di_art?igsh=MW1pM3R0MmkxeG9vaQ=="}/>
              <DropdownItem img = {iconWp} text = {"WhatsApp"} refer = {"https://wa.me/message/NUV2M5U2L64NE1"}/>
            </ul>
          </div>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars style={style}/>
        </button>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/galeria' element={<Gallery/>}/>
        <Route path='/sobrenosotros' element={<SobreNosotros/>}/>
      </Routes>
    </div>
  )
}

function DropdownItem (props) {
  return (
    <li className='dropdownItem'>
      <img src={props.img} alt="" />
      <a href={props.refer}>{props.text}</a>
    </li>
  );
}

export default App
