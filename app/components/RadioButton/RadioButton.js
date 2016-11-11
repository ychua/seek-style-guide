import styles from './RadioButton.less';
import checkboxStyles from 'seek-style-guide/react/fields/RadioButton/RadioButton.less';

import React, { Component } from 'react';
import Baseline from 'react-baseline';
import classnames from 'classnames';

import GridContainer from 'GridContainer/GridContainer';
import SandboxPreview from 'SandboxPreview/SandboxPreview';
import SandboxTogglePanel from 'SandboxTogglePanel/SandboxTogglePanel';
import SandboxToggle from 'SandboxToggle/SandboxToggle';
import Section from 'Section/Section';
import HeadlineText from 'HeadlineText/HeadlineText';
import Spec from 'Spec/Spec';
import Code from 'Code/Code';

import { RadioButton as SeekRadioButton } from 'seek-style-guide/react';

const specs = {
  default: {
    'Font scale': '1.4 — @standard-type-scale',
    Border: '1px — @sk-mid-gray-light',
    'Border radius': '2px — @field-border-radius'
  },
  focus: {
    Border: '1px @sk-focus'
  }
};

function getSpec(specsObj) {
  return Object.keys(specsObj).reduce((result, specName) => ({
    ...result,
    ...(specsObj[specName] ? specs[specName] : {})
  }), {});
}

export default class RadioButton extends Component {
  constructor() {
    super();

    this.state = {
      focus: false,
      baseline: false,
      checked: true,
      checked2: false
    };

    this.toggleFocus = this.toggleFocus.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleFocus(event) {
    this.setState({
      focus: event.target.checked
    });
  }

  toggleBaseline(event) {
    this.setState({
      baseline: event.target.checked
    });
  }

  handleChange(event) {
    this.setState({
      checked: event.target.value === 'yes',
      checked2: event.target.value === 'no'
    });
  }

  render() {
    const { baseline, checked, checked2, focus } = this.state;

    const spec = getSpec({
      default: true,
      focus
    });

    const classNames = classnames({
      [checkboxStyles.rootFocus]: focus
    });

    const radioButton =
    (
      <SeekRadioButton
        className={classNames}
        label="Still in role"
        id="still-in-role"
        inputProps={{
          onChange: this.handleChange,
          checked: true
        }}
      />
    );

    return (
      <div>
        <Baseline isVisible={baseline} color="#eee">
          <div className={styles.sandboxContainer}>
            <GridContainer>
              <div className={styles.sandbox}>
                <SandboxPreview>
                  <SeekRadioButton
                    className={classNames}
                    label="Still in role"
                    id="still-in-role"
                    inputProps={{
                      onChange: this.handleChange,
                      checked,
                      value: 'yes'
                    }}
                  />
                  <SeekRadioButton
                    className={classNames}
                    label="Still in role2"
                    id="still-in-role"
                    inputProps={{
                      onChange: this.handleChange,
                      checked: checked2,
                      value: 'no'
                    }}
                  />
                </SandboxPreview>
                <div style={{ position: 'absolute', top: 0, right: 0 }}>
                  <SandboxToggle
                    label="Baseline"
                    toggleType="checkbox"
                    toggleProps={{
                      type: 'checkbox',
                      checked: baseline,
                      onChange: this.toggleBaseline
                    }}
                  />
                </div>
              </div>
            </GridContainer>
          </div>
        </Baseline>

        <SandboxTogglePanel>
          <SandboxToggle
            label="Focus"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: focus,
              onChange: this.toggleFocus
            }}
          />
        </SandboxTogglePanel>

        <GridContainer className={styles.gridContainer}>
          <Section className={styles.section}>
            <HeadlineText>Spec</HeadlineText>
            <Spec spec={spec} />
          </Section>

          <Section className={styles.section}>
            <HeadlineText>Code</HeadlineText>
            <Code jsx={radioButton} />
          </Section>
        </GridContainer>
      </div>
    );
  }
}
