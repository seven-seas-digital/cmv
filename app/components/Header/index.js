import React from 'react';

import A from './A';
import Img from './Img';

import logo from '../../images/logo.svg';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <A href="#">
          <Img src={logo} alt="logo eye - Logo" />
        </A>
      </div>
    );
  }
}

export default Header;
