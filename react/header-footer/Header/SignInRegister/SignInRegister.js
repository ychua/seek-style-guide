import styles from './SignInRegister.less';

import React, { Component, PropTypes } from 'react';

import ExternalLink from '../../ExternalLink/ExternalLink';
import ScreenReaderOnly from '../../Accessibility/ScreenReaderOnly';

const signInUrl = 'https://www.seek.com.au/Login/Standalone';
const registerUrl = 'https://www.seek.com.au/Register/Standalone';

export default class SignInRegister extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    onLinkClick: PropTypes.func
  }

  render() {
    const { locale, onLinkClick } = this.props;
    return (
      <nav data-automation="sign-in-register" className={styles.root}>

        <ScreenReaderOnly>
          <h1>Sign in or register</h1>
        </ScreenReaderOnly>

        <ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="sign-in" href={`${signInUrl}?returnUrl=${encodeURIComponent(window.location.href)}`} className={styles.signInReglink}>Sign in</ExternalLink>
        <span>&nbsp;or&nbsp;</span>
        <ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="register" href={`${registerUrl}?returnUrl=${encodeURIComponent(window.location.href)}`} className={styles.signInReglink}>Register</ExternalLink>

      </nav>
    );
  }

}
