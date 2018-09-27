import React, { Component } from 'react';
// components
import Header from './components/Header';
import Noticias from './components/Noticias';
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
      <div className="contenedor-app">
        <Header
          titulo="The Newx"
        />
        <div className="container white contenedor-noticias">
          <Noticias 
            noticias = {this.state.noticias}
          /> 

        </div>
      </div>
    );
  }
}

export default App;
