import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-gray-800">Learning@LBG</h1>
  
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-gray-600">Home</Link></li>
          <li><Link to="/report" className="text-gray-600">Annual Report</Link></li>
        </ul>
      </nav>
   
    </header>
  );
};

export default Header;
