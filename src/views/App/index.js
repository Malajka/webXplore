import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Web from 'views/Web';
import Dance from 'views/Dance';
import Zen from 'views/Zen';
import ParticularNote from 'views/ParticularNote';
import { routes } from 'routes';

const App = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/web" />} />
        <Route exact path={routes.web} component={Web} />
        <Route path={routes.webs} component={ParticularNote} />
        <Route exact path={routes.dance} component={Dance} />
        <Route path={routes.dances} component={ParticularNote} />
        <Route exact path={routes.zen} component={Zen} />
        <Route path={routes.zens} component={ParticularNote} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);
export default App;
