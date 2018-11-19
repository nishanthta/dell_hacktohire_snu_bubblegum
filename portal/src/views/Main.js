import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Old from './Old';

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/mumbai' component={Dashboard} />
                    <Route path='/old' component={Old} />
                </Switch>
            </main>
        );
    }
}