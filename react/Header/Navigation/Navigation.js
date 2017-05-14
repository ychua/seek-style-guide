import styles from './Navigation.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';

const items = [
  {
    name: 'Job Search',
    href: '/',
    analytics: 'header:jobs',
    'data-automation': 'navigation-job-search-link'
  },
  {
    name: '$150k+ Jobs',
    'aria-label': 'One fifty K jobs',
    href: '/150kjobs',
    analytics: 'header:high+salary',
    specificLocale: 'AU',
    'data-automation': 'navigation-150k-jobs-link'
  },
  {
    name: 'Profile',
    href: '/profile',
    analytics: 'header:profile',
    'data-automation': 'navigation-profile-link'
  },
  {
    name: 'Company Reviews',
    href: '/companies',
    analytics: 'header:companies',
    specificLocale: 'AU',
    'data-automation': 'navigation-companies-link'
  },
  {
    name: 'Advice & Tips',
    href: '/career-advice',
    analytics: 'header:advice',
    'data-automation': 'navigation-advice-link'
  }
];

export default function Navigation({ locale, linkRenderer, activeTab, divider }) {
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
        { items.map(({ specificLocale = locale, analytics, name, ...restProps }, i) => (
            (specificLocale === locale) ?
              <li className={styles.item} key={i}>
                {
                  linkRenderer({
                    children: name,
                    'data-analytics': analytics,
                    className: classnames({
                      [styles.link]: true,
                      [styles.link_isActive]: name === activeTab
                    }),
                    ...restProps
                  })
                }
              </li> :
              null
          ))
        }
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
