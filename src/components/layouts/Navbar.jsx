import React, { useEffect } from "react";


const Navbar = () => {



  return (

    <nav className="white" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href='#!' className="brand-logo center">Random Hangman</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#!">Giphy Fun?</a></li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li><a href="#!">Navbar Link</a></li>
        </ul>
        <a href="#!" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    </nav>

  )


}

export default Navbar;
