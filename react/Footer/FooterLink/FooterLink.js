import styles from './FooterLink.less';

import React, { Component, PropTypes } from 'react';

export default class FooterLink extends Component {
  static propTypes = {
    analytics: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    partner: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    linkRenderer: PropTypes.func.isRequired
  };

  render() {
    const { partner, analytics, className, linkRenderer, ...props } = this.props;

    return (
      <li className={className}>
        {
          linkRenderer({
            'data-analytics': analytics,
            className: styles.link,
            ...props
          })
        }
        {
          partner ?
            <span className={styles.partnerCountry}>{` — ${partner}`}</span> :
            null
        }
      </li>
    );
  }
}
