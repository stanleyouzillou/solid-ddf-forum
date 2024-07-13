// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Domain-Driven Designers</h1>
      <nav>
        <Link to="/">Popular</Link>
        <Link to="/join">Join</Link>
      </nav>
    </header>
  );
};

export default Header;
