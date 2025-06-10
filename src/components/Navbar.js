import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const { mode, toggleTheme } = props;

  const navStyle = {
    backgroundColor: mode === 'dark' ? '#212529' : '#f8f9fa',
    color: mode === 'dark' ? 'white' : 'black',
    height: 80
  };

  const linkStyle = {
    color: mode === 'dark' ? 'white' : 'black'
  };

  return (
    <nav className="navbar navbar-expand-lg py-3" style={navStyle}>
      <div className="container-fluid">
        {/* ✅ FIX: Use `to="/"` instead of `href="#"` */}
        <Link className="navbar-brand fw-bold fs-3 text-warning mx-5" to="/">{props.title}</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* ✅ FIX: Replace href with `to="/"` */}
            <li className="nav-item me-5">
              <Link className="nav-link active fs-5" style={linkStyle} to="/">Home</Link>
            </li>
            <li className="nav-item me-5">
              {/* ✅ FIX: Use `Link` with `to="/about"` */}
              <Link className="nav-link fs-5" style={linkStyle} to="/about">About</Link>
            </li>
          </ul>

          <form className="d-flex justify-content-center" role="search">
            <input className="form-control rounded-pill px-4 me-3" type="search"
              placeholder="Search something..." aria-label="Search" />
            <button className="btn btn-warning rounded-pill px-4 fs-6 fw-semibold" type="submit">
              Search
            </button>
          </form>

          <div className="dropdown ms-4">
            <button className={`btn btn-${mode} dropdown-toggle fs-5 px-4 py-2`} type="button"
              id="themeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Theme
            </button>
            <ul className="dropdown-menu dropdown-menu-end mt-2 shadow"
              aria-labelledby="themeDropdown">
              <li><button className="dropdown-item" onClick={() => toggleTheme("light")}>Light</button></li>
              <li><button className="dropdown-item" onClick={() => toggleTheme("dark")}>Dark</button></li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
}
