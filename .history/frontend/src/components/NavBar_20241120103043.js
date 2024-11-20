import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Nestpally</h1>
        <div>
          <Link className="mx-2" to="/">Home</Link>
          <Link className="mx-2" to="/matching">Find Housemates</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
