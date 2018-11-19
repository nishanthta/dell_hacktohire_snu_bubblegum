import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.PureComponent {
    render() {
        return(
            <header>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/delhi'>Delhi</Link></li>
                <li><Link to='/mumbai'>Mumbai</Link></li>
              </ul>
            </nav>
          </header>
        );
    }
}