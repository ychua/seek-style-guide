import styles from './Navigation.less';

import React, { Component, PropTypes } from 'react';

import ScreenReaderOnly from '../../Accessibility/ScreenReaderOnly';
import ExternalLink from '../../ExternalLink/ExternalLink';

export default class Navigation extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    onLinkClick: PropTypes.func
  }

  render() {
    const { locale, onLinkClick } = this.props;
    return (
      <nav role="navigation" className={styles.root}>

        <ScreenReaderOnly>
          <h1>Main Navigation</h1>
        </ScreenReaderOnly>

        <ul className={styles.list}>
          <li className={styles.item}>
            <ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="header:jobs" className={styles.link} href="https://www.seek.com.au">Job Search</ExternalLink>
          </li>
          {
            locale === 'AU' &&
            <li className={styles.item}>
              <ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="header:high+salary" className={styles.link} href="https://www.seek.com.au/150kjobs">$150k+ Jobs</ExternalLink>
            </li>
          }
          <li className={styles.item}>
            <ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="header:profile" className={styles.link} href="https://www.seek.com.au/profile/">Profile</ExternalLink>
          </li>
          {
            locale === 'AU' &&
            <li className={`${styles.item} ${styles.item_isNew}`}>
              <ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="header:companies" className={styles.link} href="https://www.seek.com.au/companies/">Company Reviews</ExternalLink>
            </li>
          }
          <li className={styles.item}>
            <ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="header:advice" className={styles.link} href="https://www.seek.com.au/career-advice/">Advice &amp; Tips</ExternalLink>
          </li>
        </ul>

      </nav>
    );
  }

}
