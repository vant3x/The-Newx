import React from 'react';

const Noticia = (props) => {
  const {urlToImage, url, title, description, author, publishedAt, source} = props.noticia; 
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt={title} />
          <span className="card-title text-shadow">{source.name}</span>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a href={url} target="_blank" className="waves-effect waves-light btn blue darken-2">Leer más</a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
