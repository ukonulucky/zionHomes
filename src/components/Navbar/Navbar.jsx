import React from 'react'
import logo from "../../asset/images/logo.png"
import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar() {
  return (
      <div className="navbar">
          <div className="navbar__container">
              <div className="navbar__logo">
                  <Link to="/">
                  <img src={ logo } alt="" />
                  </Link>
              </div>
              <div className="navbar__text">
                  <h3 className="text"> <Link to="sale">for Sale</Link></h3>
                  <h3 className="text">
                  <Link to="rent">to rent</Link>
                  </h3>
                  <h3 className="text">
                      <Link to="sale__own">
                          sale property
                  </Link>
                  </h3>
                  <h3 className="text">
                  <Link to="contact">contact us</Link>
                  </h3>
              </div>
          </div>
    </div>
  )
}

export default Navbar