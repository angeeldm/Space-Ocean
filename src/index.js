import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Fondo from './elements/Fondo';
import InicioSesion from './components/InicioSesion';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lato:300,400,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Space Ocean</title>
      </Helmet>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={InicioSesion}/>
          <Route path="/home" component={App} />
        </Switch>
      </BrowserRouter>
      <Fondo />
    </>
  );
}

ReactDOM.render(<Index />,  document.getElementById('root'));