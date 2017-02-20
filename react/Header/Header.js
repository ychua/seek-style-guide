import styles from './Header.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import PartnerSites from './PartnerSites/PartnerSites';
import Locales from './Locales/Locales';
import Navigation from './Navigation/Navigation';
import SignInRegister from './SignInRegister/SignInRegister';
import UserAccount from './UserAccount/UserAccount';

const defaultLinkRenderer = props => (<a {...props} />);
const employerLinkHref = locale => locale === 'NZ' ?
  'https://talent.seek.co.nz/' :
  'https://talent.seek.com.au/';

export default class Header extends Component {

  static propTypes = {
    locale: PropTypes.string,
    authenticated: PropTypes.bool,
    userDisplayName: PropTypes.string.isRequired,
    linkRenderer: PropTypes.func,
    activeTab: PropTypes.string
  };

  static defaultProps = {
    locale: 'AU',
    linkRenderer: defaultLinkRenderer,
    authenticated: null,
    activeTab: null
  };

  render() {
    const {
      locale,
      authenticated,
      userDisplayName,
      linkRenderer,
      activeTab
    } = this.props;

    const userClasses = classnames({
      [styles.user]: true,
      [styles.user_isReady]: authenticated === true || authenticated === false
    });

    return (
      <header role="banner" aria-label="Primary navigation">
        <section className={styles.root}>
          <div className={styles.banner}>
            <h1 data-automation="logo" className={styles.logo}>
              {
                linkRenderer({
                  'data-analytics': 'header:jobs',
                  className: styles.logoLink,
                  href: '/',
                  children: 'SEEK'
                })
              }
            </h1>
            <div className={styles.userWrapper}>
              <div className={userClasses}>
                {
                  authenticated ?
                    <UserAccount userDisplayName={userDisplayName} linkRenderer={linkRenderer} /> :
                    <SignInRegister linkRenderer={linkRenderer} />
                }
                <span className={styles.divider} />
              </div>
              <div className={styles.employerSite}>
                {
                  linkRenderer({
                    'data-analytics': 'header:employer+site',
                    className: styles.employerLink,
                    href: employerLinkHref(locale),
                    children: 'Employer site'
                  })
                }
              </div>
            </div>
          </div>
          <div className={styles.navigation}>
            <Navigation locale={locale} linkRenderer={linkRenderer} activeTab={activeTab} />
          </div>
          <div className={styles.topBanner}>
            <div className={styles.topBannerContent}>
              <PartnerSites locale={locale} linkRenderer={linkRenderer} />
              <div className={styles.locale}>
                <Locales locale={locale} linkRenderer={linkRenderer} />
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }

}
