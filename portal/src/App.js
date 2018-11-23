import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';
import OldDash from './views/Dashboard/OldDash';
import Chennai from './views/Dashboard/Chennai';
import Kolkata from './views/Dashboard/Kolkata';
import Mumbai from './views/Dashboard/Mumbai';
import Delhi from './views/Dashboard/Delhi';
import Dashboard from './views/Dashboard/Dashboard';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  
  componentDidMount() {
    document.title = 'Dell Inventory Management System';
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/chennai" name="Chennai" component={Chennai} />
          <Route path="/delhi" name="Delhi" component={Delhi} />
          <Route path="/mumbai" name="Mumbai" component={Mumbai} />
          <Route path="/kolkata" name="Kolkata" component={Kolkata} />
          <Route path="/old" name="Old items" component={OldDash} />
          <Route path="/" name="Home" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
