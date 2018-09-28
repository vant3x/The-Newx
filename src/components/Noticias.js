import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

class Noticias extends React.Component {
  
  render() {
    return (
      <div className="row">
        {this.props.noticias.map(noticia => (
          <Noticia 
            key={noticia.url}
            noticia={noticia}
          />
        ))}
      </div>
    );
  }
}

Noticias.propTypes = {
  noticias: PropTypes.array.isRequired
}

export default Noticias;

