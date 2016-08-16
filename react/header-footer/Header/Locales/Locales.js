import styles from './Locales.less';

import React, { Component, PropTypes } from 'react';

import ScreenReaderOnly from '../../Accessibility/ScreenReaderOnly';
import ExternalLink from '../../ExternalLink/ExternalLink';

class Locales extends Component {

  static propTypes = {
    locale: PropTypes.string.isRequired,
    onLinkClick: PropTypes.func
  }

  render() {
    const { locale, onLinkClick } = this.props;
    const isAU = locale === 'AU';
    const isNZ = locale === 'NZ';

    return (
      <nav role="navigation" className={styles.root}>

        <ScreenReaderOnly>
          <h1>Select your country</h1>
        </ScreenReaderOnly>

        <ul className={styles.list}>
          <li className={styles.listItem}>
          {
            isAU ?
              <span className={styles.locale_isActive}>AU</span> :
              <ExternalLink onLinkClick={onLinkClick}
                locale={locale}
                analytics="header:au+homepage"
                className={styles.localeLink}
                href="https://www.seek.com.au"
                title="SEEK Australia">
                AU
              </ExternalLink>
          }
          </li>
          <li className={styles.listItem}>
          {
            isNZ ?
              <span className={styles.locale_isActive}>NZ</span> :
              <ExternalLink onLinkClick={onLinkClick}
                locale={locale}
                analytics="header:nz+homepage"
                className={styles.localeLink}
                href="https://www.seek.co.nz"
                title="SEEK New Zealand">
                NZ
              </ExternalLink>
          }
          </li>
        </ul>

      </nav>
    );
  }

}

export default Locales;
