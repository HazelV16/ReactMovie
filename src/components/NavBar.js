import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = ({ onSearch }) => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/watchlist" className="nav-link">Watch List</Link>
      <Link to="/watchedlist" className="nav-link">Watched List</Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default NavBar;
