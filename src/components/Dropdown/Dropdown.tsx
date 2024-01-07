import './Dropdown.css';

import React from "react";

interface DropdownProps {
  open: boolean;
  trigger: React.ReactNode;
  menu: React.ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = ({ open, trigger, menu }) => {
  return (
    <div className='dropdown'>
      {trigger}
        {open ? (
          <ul className='menu'>
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">{menuItem}</li>
            ))}
          </ul>
        ) : null}
      </div>
  );
};

export default Dropdown;