import styles from './Navigation.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import ScreenReaderOnly from '../../Accessibility/ScreenReaderOnly';

const isActive = (activeTab, { children, className, ...restProps }) => {
  return {
    ...restProps,
    children,
    className: classnames(className, {
      [styles.link_isActive]: children === activeTab
    })
  };
};

export default class Navigation extends Component {

  static propTypes = {
    locale: PropTypes.string.isRequired,
    linkRenderer: PropTypes.func.isRequired,
    activeTab: PropTypes.oneOf([
      'Job Search', '$150k+ Jobs', 'Profile', 'Company Reviews', 'Advice & Tips'
    ]),
    divider: PropTypes.bool.isRequired
  };

  static defaultProps = {
    activeTab: null
  };

  render() {
    const { locale, linkRenderer, activeTab, divider } = this.props;
    const isAU = locale === 'AU';

    const $150k = isAU ?
      (<li className={styles.item}>
        {
          linkRenderer(isActive(activeTab, {
            'data-analytics': 'header:high+salary',
            className: styles.link,
            'aria-label': 'One fifty K jobs',
            href: '/150kjobs',
            children: '$150k+ Jobs'
          }))
        }
      </li>) : null;

    const companyReviews = isAU ?
      (<li className={styles.item}>
        {
          linkRenderer(isActive(activeTab, {
            'data-analytics': 'header:companies',
            className: styles.link,
            href: '/companies/',
            children: 'Company Reviews'
          }))
        }
      </li>) : null;

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
            {
              linkRenderer(isActive(activeTab, {
                'data-analytics': 'header:jobs',
                className: styles.link,
                href: '/',
                children: 'Job Search'
              }))
            }
          </li>

          {$150k}

          <li className={styles.item}>
            {
              linkRenderer(isActive(activeTab, {
                'data-analytics': 'header:profile',
                className: styles.link,
                href: '/profile/',
                children: 'Profile'
              }))
            }
          </li>

          {companyReviews}

          <li className={styles.item}>
            {
              linkRenderer(isActive(activeTab, {
                'data-analytics': 'header:advice',
                className: styles.link,
                href: '/career-advice/',
                children: 'Advice & Tips'
              }))
            }
          </li>

        </ul>

      </nav>
    );
  }

}
