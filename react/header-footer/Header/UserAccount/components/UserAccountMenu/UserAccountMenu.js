import styles from './UserAccountMenu.less';

import React, { Component, PropTypes } from 'react';

import StarIcon from '../../../../../icons/StarIcon/StarIcon';
import HeartIcon from '../../../../../icons/HeartIcon/HeartIcon';
import ProfileIcon from '../../../../../icons/ProfileIcon/ProfileIcon';
import ExternalLink from '../../../../ExternalLink/ExternalLink';

const clearLocalStorage = () => localStorage.clear();

export default class UserAccountMenu extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    analytics: PropTypes.string.isRequired,
    onLinkClick: PropTypes.func
  };
  render() {
    const { locale, analytics, onLinkClick } = this.props;
    return (
      <ul className={styles.root}>
        <li>
          <ExternalLink onLinkClick={onLinkClick}
            locale={locale}
            analytics={analytics}
            className={styles.item}
            href="https://www.seek.com.au/profile/">
            Your profile<ProfileIcon className={styles.icon} svgClassName={styles.iconSvg} />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink onLinkClick={onLinkClick}
            locale={locale}
            analytics={analytics}
            className={`${styles.item} ${styles.subItem}`}
            href="https://www.seek.com.au/MyActivity#favourite">
            Saved searches<HeartIcon className={styles.icon} svgClassName={styles.iconSvg} />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink onLinkClick={onLinkClick}
            locale={locale}
            analytics={analytics}
            className={`${styles.item} ${styles.subItem}`}
            href="https://www.seek.com.au/my-activity/saved-jobs">
            Saved jobs<StarIcon className={styles.icon} svgClassName={styles.iconSvg} />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink onLinkClick={onLinkClick}
            locale={locale}
            analytics={analytics}
            className={`${styles.item} ${styles.subItem}`}
            href="https://www.seek.com.au/my-activity/applied-jobs">
            Applied jobs
          </ExternalLink>
        </li>
        <li>
          <ExternalLink onLinkClick={onLinkClick}
            locale={locale}
            analytics={analytics}
            className={styles.item}
            href="https://www.seek.com.au/settings/">
            Settings
          </ExternalLink>
        </li>
        <li>
          <ExternalLink onLinkClick={onLinkClick}
            locale={locale}
            analytics={analytics}
            className={styles.item}
            onClick={clearLocalStorage}
            href="https://www.seek.com.au/Login/Logout">
            Sign out
          </ExternalLink>
        </li>
      </ul>
    );
  }

}
