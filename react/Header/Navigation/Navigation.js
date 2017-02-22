import styles from './Navigation.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ScreenReaderOnly from '../../Accessibility/ScreenReaderOnly';

const items = [
  {
    name: 'Job Search',
    href: '/',
    analytics: 'header:jobs'
  },
  {
    name: '$150k+ Job',
    'aria-label': 'One fifty K jobs',
    href: '/150kjobs',
    analytics: 'header:high+salary',
    specificLocale: 'AU'
  },
  {
    name: 'Company Reviews',
    href: '/companies/',
    analytics: 'header:companies',
    specificLocale: 'AU'
  },
  {
    name: 'Profile',
    href: '/profile/',
    analytics: 'header:profile'
  },
  {
    name: 'Advice & Tips',
    href: '/career-advice/',
    analytics: 'header:advice'
  }
];

export default function Navigation({ locale, linkRenderer, activeTab, divider }) {
  const renderLink = ({ specificLocale = locale, analytics, name, ...restProps }, key) => (
    (specificLocale === locale) ?
      linkRenderer({
        children: name,
        'data-analytics': analytics,
        className: classnames({
          [styles.link]: true,
          [styles.link_isActive]: name === activeTab
        }),
        key,
        ...restProps
      }) :
      null
  );

  return (
    <nav
      aria-labelledby="MainNavigation"
      role="navigation"
      className={classnames({
        [styles.root]: true,
        [styles.divider]: divider
      })}>

      <ScreenReaderOnly>
        <h1 id="MainNavigation">Primary Links</h1>
      </ScreenReaderOnly>

      <ul className={styles.list} data-automation="nav-tabs">
        <li className={styles.item}>
          { items.map(renderLink) }
        </li>
      </ul>

    </nav>
  );
}

Navigation.propTypes = {
  locale: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  divider: PropTypes.bool.isRequired,
  activeTab: PropTypes.oneOf(items.map(({ name }) => name))
};

Navigation.defaultProps = {
  activeTab: null
};
