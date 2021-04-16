import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Background from './elements/Background';
import Login from './components/Login';
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
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={App} />
        </Switch>
      </BrowserRouter>
      <Background />
    </>
  );
}

ReactDOM.render(<Index />,  document.getElementById('root'));