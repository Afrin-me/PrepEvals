import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/navbar.css"

const Navbar=()=> {
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/books" className="link">
        Books
      </Link>
      <Link to="/bookdetails" className="link">
        BookDetails
      </Link>
      <Link to="/login" className="link">
        Login
      </Link>
    </nav>
  );
}

export default Navbar