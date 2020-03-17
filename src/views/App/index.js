import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Web from 'views/Web';
import Dance from 'views/Dance';
import Zen from 'views/Zen';


const App = () => (
  <MainTemplate>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component = {Web}/>
      <Route  path="/dance" component = {Dance}/>
      <Route  path="/zen" component = {Zen}/>
    </Switch>
    </BrowserRouter>
  </MainTemplate>
);
export default App;
