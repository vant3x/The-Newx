import React from 'react';

const Noticia = (props) => {
  const {urlToImage, url, title, description, author, publishedAt, source} = props.noticia; 
  return (
    <div>
      <p>Desde Noticia</p>
    </div>
  )
}

export default Noticia;
