import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.PureComponent {
    render() {
        return(
            <header>
            <nav>
              <ul>
                <li style={{display: 'inline'}}><Link to='/'>Home</Link><p style={{display: 'inline'}}>{'\t'}</p></li>
                <li style={{display: 'inline'}}><Link to='/delhi'>Delhi</Link><p style={{display: 'inline'}}>{'\t'}</p></li>
                <li style={{display: 'inline'}}><Link to='/mumbai'>Mumbai</Link><p  style={{display: 'inline'}}>{'\t'}</p></li>
                <li style={{display: 'inline'}}><Link to='/old'>Old items</Link><p  style={{display: 'inline'}}>{'\t'}</p></li>
              </ul>
            </nav>
          </header>
        );
    }
}