import React from 'react';
import Dashboard from './Dashboard';

export default class Old extends React.PureComponent {
    render() {
        return(
            <Dashboard old={true} />
        );
    }
}