import './Header.css';
import React from "react";

type HeaderProps = {
  children: React.ReactNode;
  isHomePage: boolean;
};

const Header: React.FC<HeaderProps> = ({ children, isHomePage }) => {
  return (
    <header>
       <h1 className={`page-title${isHomePage ? '' : '-albums-page'}`}>MixTape</h1>
      {children}
    </header>
  );
};

export default Header;