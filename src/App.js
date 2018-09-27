import React, { Component } from 'react';
// components
import Header from './components/Header';

class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    let pais = 'CO';
    let url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=business&apiKey=5099b2a1a18e40ceab56b16da3aa8ac3`;

    fetch(url)
      .then(respuesta => {
        return respuesta.json()
      })
      .then(noticias => {
        this.setState({
          noticias : noticias.articles
        })
      } )
    
  }

  render() {
    return (
      <div className="App">
        <Header
          titulo="The Newx"
        />
      </div>
    );
  }
}

export default App;
