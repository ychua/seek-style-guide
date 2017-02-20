import styles from './Locales.less';
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ScreenReaderOnly from '../../Accessibility/ScreenReaderOnly';

export default class Locales extends Component {

  static propTypes = {
    locale: PropTypes.string.isRequired,
    linkRenderer: PropTypes.func.isRequired
  };

  render() {
    const { locale, linkRenderer } = this.props;
    const isAU = locale === 'AU';
    const isNZ = locale === 'NZ';

    const listClasses = classnames({
      [styles.list]: true,
      [styles.list_isNZ]: isNZ
    });

    return (
      <nav aria-labelledby="Locales" role="navigation" className={styles.root}>

        <ScreenReaderOnly>
          <h1 id="Locales">Select your country</h1>
        </ScreenReaderOnly>

        <ul className={listClasses}>
          <li className={styles.listItem}>
            {
              isAU ?
                <span className={styles.locale_isActive}>AU</span> :
                linkRenderer({
                  'data-analytics': 'header:au+homepage',
                  className: styles.localeLink,
                  href: 'https://www.seek.com.au',
                  title: 'SEEK Australia',
                  children: 'AU'
                })
            }
          </li>
          <li className={styles.listItem}>
            {
              isNZ ?
                <span className={styles.locale_isActive}>NZ</span> :
                linkRenderer({
                  'data-analytics': 'header:nz+homepage',
                  className: styles.localeLink,
                  href: 'https://www.seek.co.nz',
                  title: 'SEEK New Zealand',
                  children: 'NZ'
                })
            }
          </li>
        </ul>

      </nav>
    );
  }

}
