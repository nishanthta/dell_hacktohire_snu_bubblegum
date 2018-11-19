import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

export default class Main extends React.PureComponent {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/#/mumbai' component={Dashboard} />
                </Switch>
            </main>
        );
    }
}