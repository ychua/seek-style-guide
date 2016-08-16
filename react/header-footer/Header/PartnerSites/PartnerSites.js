import styles from './PartnerSites.less';

import React, { Component, PropTypes } from 'react';

import ExternalLink from '../../ExternalLink/ExternalLink';
import ScreenReaderOnly from '../../Accessibility/ScreenReaderOnly';

export default class PartnerSites extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    onLinkClick: PropTypes.func
  }

  render() {
    const learningUrl = 'https://www.seeklearning.com.au/?campaigncode=seek_banner_29&sc_trk=skj-courses-link';
    const businessUrl = 'https://www.seekbusiness.com.au/?tracking=sk:main:au:nav:bus';
    const volunteerUrl = 'https://www.volunteer.com.au/?tracking=SKMAU:main+header';
    const { locale, onLinkClick } = this.props;
    return (
      <nav role="navigation">
        <ScreenReaderOnly>
          <h1>Partner Sites</h1>
        </ScreenReaderOnly>
        <ul className={styles.list}>
          <li><a className={`${styles.link} ${styles.link_isJobs}`} title="SEEK Jobs">Jobs</a></li>
          <li><ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="header:courses" className={`${styles.link} ${styles.link_isLearning}`} href={learningUrl} title="SEEK Learning">Courses</ExternalLink></li>
          <li><ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="header:business+for+sale" className={`${styles.link} ${styles.link_isBusiness}`} href={businessUrl} title="SEEK Business">Businesses for sale</ExternalLink></li>
          <li><ExternalLink onLinkClick={onLinkClick} locale={locale} analytics="header:volunteering" className={`${styles.link} ${styles.link_isVolunteer}`} href={volunteerUrl} title="SEEK Volunteer">Volunteering</ExternalLink></li>
        </ul>
      </nav>
    );
  }

}
