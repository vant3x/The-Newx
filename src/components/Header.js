import React from 'react';
import PropTypes from 'prop-types';


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

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header;