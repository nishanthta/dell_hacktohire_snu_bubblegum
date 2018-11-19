import React from 'react';
import Dashboard from './Dashboard';

export default class Old extends React.Component {
    render() {
        return(
            <Dashboard old={true} />
        );
    }
}