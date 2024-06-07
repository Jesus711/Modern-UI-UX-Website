import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/GPT-3.svg'

// Naming convention being used is BEM - Stands for Block Element Modifier

// New variable Menu that acts like a functional component that will be used to return
// the navbar links by using a React fragment <> </>
// React fragment lets you group elements without a wrapper node, div can be replace by React fragments
// Can be used like any other component <Menu />
const Menu = () => (
  <>
    <p> <a href="#home">Home</a> </p>
    <p> <a href="#wgpt3">What is GPT?</a> </p>
    <p> <a href="#possibility">Open AI</a> </p>
    <p> <a href="#features">Case Studies</a> </p>
    <p> <a href="#blog">Library</a> </p>
  </>
)

const Navbar = () => {

  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">

        {toggleMenu 
        ? <RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(true)}/> 
        : <RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)}/>}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar