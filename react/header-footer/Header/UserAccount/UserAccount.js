import styles from './UserAccount.less';

import React, { Component, PropTypes } from 'react';

import ChevronIcon from '../../../icons/ChevronIcon/ChevronIcon';
import ScreenReaderOnly from '../../Accessibility/ScreenReaderOnly';
import UserAccountMenu from 'UserAccountMenu/UserAccountMenu';

class UserAccount extends Component {

  static propTypes = {
    username: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    analytics: PropTypes.string.isRequired,
    onLinkClick: PropTypes.func
  };

  render() {
    const { username, locale, analytics, onLinkClick } = this.props;

    return (
      <nav data-automation="user-account" className={`${styles.root}`}>

        <ScreenReaderOnly>
          <h1>User menu</h1>
        </ScreenReaderOnly>

        <input id="user-account-menu-toggle" autoComplete="off" className={styles.toggle} type="checkbox" />

        <div className={styles.menuBackdrop}>
          <label
            data-automation="user-account-menu-backdrop"
            htmlFor="user-account-menu-toggle"
            className={styles.menuBackdropLabel}>
            <ScreenReaderOnly>Close user menu</ScreenReaderOnly>
          </label>
        </div>

        <label data-automation="user-account-menu-toggle" className={styles.toggleLabel} htmlFor="user-account-menu-toggle">
          <ScreenReaderOnly>Toggle user menu</ScreenReaderOnly>
          <span className={styles.displayName} data-automation="user-account-name" data-hj-masked={true}>{ username }</span>
          <ChevronIcon direction="down" className={styles.chevron} svgClassName={styles.chevronSvg} />
        </label>

        <div className={styles.toggleContainer}>
          <UserAccountMenu onLinkClick={onLinkClick} locale={locale} analytics={analytics} />
        </div>

      </nav>
    );
  }

}

export default UserAccount;
