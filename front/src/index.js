/**
 * Inicio do Aplicativo
 */

import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/vendors/icomoon/style.css'

import Race from './screens/Race';
import Home from './screens/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/"               component={ Home }     exact={true}  />
      <Route path="/room/:room_id"  component={ Race }     exact={true}  />

      {/* Page 404 */}
      {/* <Route path="*"  component={ Page404 } /> */}
    </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);

serviceWorker.unregister();
