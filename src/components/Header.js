import React from 'react';

const Header = (props) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2 ">
          <a href="" 
            className="brand-logo titulo center"
            ><i className="fas fa-newspaper icon"></i> {props.titulo} </a>
      </div>
    </nav>
  );
};

export default Header;