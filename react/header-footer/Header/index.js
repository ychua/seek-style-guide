import styles from './index.less';

import React, { Component, PropTypes } from 'react';

import PartnerSites from './PartnerSites/PartnerSites';
import Locales from './Locales/Locales';
import Navigation from './Navigation/Navigation';
import SignInRegister from './SignInRegister/SignInRegister';
import UserAccount from './UserAccount/UserAccount';
import ExternalLink from '../ExternalLink/ExternalLink';

import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    analytics: PropTypes.object.isRequired,
    onLinkClick: PropTypes.func
  };

  render() {
    const { user, location, analytics, onLinkClick } = this.props;
    const { authenticated, ready, personalDetails } = user;
    const { locale } = location;
    return (
      <header role="banner" className={styles.root}>
        <div className={styles.banner}>
          <h1 data-automation="logo" className={styles.logo}>
            <ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="header:jobs" className={styles.logoLink} href="http://www.seek.com.au/">SEEK</ExternalLink>
          </h1>
          <div className={styles.user}>
            <TransitionGroup transitionName={{ enter: styles.transitionEnter, enterActive: styles.transitionEnterActive }} transitionEnterTimeout={500} transitionLeave={false}>
              {(() => {
                let result = null;
                if (ready) {
                  if (authenticated) {
                    result = <UserAccount onLinkClick={onLinkClick} username={personalDetails.firstName} locale={locale} analytics={'test:analyticsTODO'} />;
                  } else {
                    result = <SignInRegister locale={locale} />;
                  }
                }
                return result;
              })()}
            </TransitionGroup>
            <div className={styles.employerSite}>
              <span className={styles.divider}></span>
              <ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="header:employer+site" className={styles.employerLink} href="https://talent.seek.com.au/">Employer site</ExternalLink>
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <Navigation locale={locale} />
        </div>
        <div className={styles.topBanner}>
          <div className={styles.topBannerContent}>
            <PartnerSites locale={locale} />
            <div className={styles.locale}>
              <Locales locale={locale} />
            </div>
          </div>
        </div>
      </header>
    );
  }

}

export default Header;
