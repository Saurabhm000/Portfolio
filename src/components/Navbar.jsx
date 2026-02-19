import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="mainnav">

        <div className="navheading1">
          <p><NavLink to="/">it's me</NavLink></p>
        </div>

        {/* Hamburger */}
        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Your Original Menu */}
        <div className={`navheading2 ${menuOpen ? "open" : ""}`}>

          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            <div className="nav-anchor">
              <hr />
              <div className="nav-anchor-inner">
                <p>My Projects</p>
                <img src="./Arrow-up-right.svg" alt="arrow" height="30px"/>
              </div>
              <p>See all of nice project I have done</p>
            </div>
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            <div className="nav-anchor">
              <hr />
              <div className="nav-anchor-inner">
                <p>About Me</p>
                <img src="./Arrow-up-right.svg" alt="arrow" height="30px"/>
              </div>
              <p>Learn about myself, what I do</p>
            </div>
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            <div className="nav-anchor">
              <hr />
              <div className="nav-anchor-inner">
                <p>Contact Me</p>
                <img src="./Arrow-up-right.svg" alt="arrow" height="30px"/>
              </div>
              <p>Send a message to me</p>
            </div>
          </NavLink>

        </div>
      </div>
    </>
  )
}

export default Navbar
