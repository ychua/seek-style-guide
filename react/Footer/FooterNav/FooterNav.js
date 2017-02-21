import styles from './FooterNav.less';

import React, { Component, PropTypes } from 'react';

export default class FooterNav extends Component {
  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const { label, children, className } = this.props;

    return (
      <nav aria-label={label} className={className || styles.category}>
        <h1 className={styles.heading}>{label}</h1>
        <ul>
          { children }
        </ul>
      </nav>
    );
  }
}
