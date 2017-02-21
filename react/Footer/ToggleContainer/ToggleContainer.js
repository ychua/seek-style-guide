import styles from './ToggleContainer.less';

import React, { Component, PropTypes } from 'react';
import ChevronIcon from '../../icons/ChevronIcon/ChevronIcon';

export default class ToggleContainer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    'data-automation': PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const { children, label, name, 'data-automation': dataAutomation } = this.props;

    return (
      <li>
        <input id={name} className={styles.toggle} type="checkbox" data-automation={dataAutomation} />
        <label className={`${styles.toggleLink} ${styles.toggleLabel}`} htmlFor={name}>
          {label}
          <ChevronIcon direction="down" className={styles.chevron} svgClassName={styles.chevronSvg} />
        </label>
        <ul className={styles.toggleContainer}>
          { children }
        </ul>
      </li>
    );
  }
}
