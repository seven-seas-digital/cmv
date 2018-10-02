/**
 *
 * NavButtons
 *
 */
import { FormattedMessage } from 'react-intl';
import React from 'react';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class NavButtons extends React.PureComponent {
  render() {
    return (
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    );
  }
}

NavButtons.propTypes = {};

export default NavButtons;
