import React, { Component, PropTypes } from 'react';
import styles from './RadioButton.less';

import classnames from 'classnames';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

export default class RadioButton extends Component {
  static displayName = 'RadioButton';

  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    inputProps: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    })
  }

  static defaultProps = {
    className: '',
    inputProps: {
      checked: false
    }
  };

  renderInput() {
    const { inputProps, id } = this.props;

    const allInputProps = {
      ...combineClassNames(inputProps, styles.input),
      type: 'radio',
      id
    };

    return (
      <input {...allInputProps} />
    );
  }

  renderLabel() {
    const { label, id } = this.props;

    return (
      <label className={styles.label} htmlFor={id}>
        <svg className={styles.svg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle className={styles.circle} cx="100" cy="100" r="100" />
        </svg>
        <span>{label}</span>
      </label>
    );
  }

  render() {
    const { className } = this.props;
    const rootClassNames = classnames({
      [styles.root]: true,
      [className]: className
    });

    return (
      <div className={rootClassNames}>
        { this.renderInput() }
        { this.renderLabel() }
      </div>
    );
  }
}
