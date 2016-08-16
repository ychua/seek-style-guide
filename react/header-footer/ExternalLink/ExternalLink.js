import React, { Component, PropTypes } from 'react';

const seekAuDomainRegex = /seek|seeklearning\.com\.au/;

export default class ExternalLink extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    href: (props, propName, componentName) => {
      const propValue = props[propName];

      if (typeof propValue === 'undefined') {
        return new Error(`Required prop \`${propName}\` was not specified in \`${componentName}\`.`);
      }

      if (typeof propValue !== 'string') {
        return new Error(`Invalid prop \`${propName}\` of type \`${typeof propValue}\` supplied to \`${componentName}\`, expected \`string\`.`);
      }

      if (propValue.slice(0, 4) !== 'http') {
        return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected '/${propValue}' to start with 'http'.`);
      }
      return null;
    },
    onLinkClick: PropTypes.func,
    analytics: PropTypes.string,
    children: PropTypes.node
  };

  getTarget(href) {
    return seekAuDomainRegex.test(href) ? '_self' : '_target';
  }

  static getSeekUrl(href, locale) {
    if (locale === 'NZ') {
      return href.replace('com.au', 'co.nz');
    }

    return href;
  }

  static getHref(href, locale) {
    if (href.indexOf('seekbusiness') > -1 && locale === 'NZ') {
      return href.replace('www.seekbusiness.com.au', 'www.seekbusiness.com.au/?site=nz');
    }
    if (href.indexOf('volunteer') > -1 && locale === 'NZ') {
      return href.replace('www.volunteer.com.au', 'seekvolunteer.co.nz');
    }
    return seekAuDomainRegex.test(href) ? this.getSeekUrl(href, locale) : href;
  }

  render() {
    const { href, children, locale, analytics, onLinkClick, className } = this.props;
// TODO fix
    return (
      <a href={href} children={children} className={className} target={this.getTarget(href)} href={href} onClick={analytics ? () => onLinkClick(analytics) : ''}>
          {children}
        </a>
    );
  }

}
