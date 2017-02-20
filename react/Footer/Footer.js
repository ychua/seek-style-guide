import styles from './Footer.less';

import React, { Component, PropTypes } from 'react';

import ChevronIcon from '../icons/ChevronIcon/ChevronIcon';
import ScreenReaderOnly from '../Accessibility/ScreenReaderOnly';

const defaultLinkRenderer = props => (<a {...props} />);

export default class Footer extends Component {
  static propTypes = {
    locale: PropTypes.string,
    linkRenderer: PropTypes.func
  };

  static defaultProps = {
    locale: 'AU',
    linkRenderer: defaultLinkRenderer
  };

  shouldComponentUpdate(nextProps) {
    return this.props.locale !== nextProps.locale;
  }

  render() {
    const { locale, linkRenderer } = this.props;
    const isAU = locale === 'AU';
    const isNZ = locale === 'NZ';
    const domainSuffix = isNZ ? 'co.nz' : 'com.au';

    return (
      <footer aria-labelledby="FooterHeading" role="contentinfo" className={styles.root}>
        <section>
          <ScreenReaderOnly>
            <h1 id="FooterHeading">Footer</h1>
          </ScreenReaderOnly>

          <div className={styles.content}>
            <FooterNav label="Tools">
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:profile" href="/profile/">Profile</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:my+activity" href="/myactivity#favourite">Saved searches</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:favourite" href="/my-activity/saved-jobs">Saved jobs</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:applied" href="/my-activity/applied-jobs">Applied jobs</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:advice+tips" href="/career-advice/">Advice &amp; tips</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:companies" href="/companies/" visible={isAU}>Company reviews</FooterLink>
            </FooterNav>

            <FooterNav label="Company">
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:about+seek" href="/investor/about-us">About SEEK</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:media" href="/investor/news-media">Media</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:work+for+seek" href="/work-for-seek">Work for SEEK</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:investor+centre" href="https://ir.seek.com.au">Investor centre</FooterLink>
              <ToggleContainer name="InternationalPartnersToggle" label="International partners">
                <FooterLink linkRenderer={linkRenderer} partner="India" analytics="toolbar:babajob" href="http://www.babajob.com">BabaJob</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="Bangladesh" analytics="toolbar:bdjobs" href="http://www.bdjobs.com">Bdjobs</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="E Africa" analytics="toolbar:brighter+monday" href="https://www.brightermonday.com">Brighter Monday</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="Brazil" analytics="toolbar:catho" href="http://www.catho.com.br">Catho</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="W Africa" analytics="toolbar:jobberman" href="http://www.jobberman.com">Jobberman</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="SE Asia" analytics="toolbar:jobsdb" href="http://www.jobsdb.com">jobsDB</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="SE Asia" analytics="toolbar:jobstreet" href="http://www.jobstreet.com">JobStreet</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="Worldwide" analytics="toolbar:jora+int" href="https://www.jora.com">Jora</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="Brazil" analytics="toolbar:manager" href="http://www.manager.com.br">Manager</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="Mexico" analytics="toolbar:occ+mundial" href="https://www.occ.com.mx">OCC Mundial</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="Latin America" analytics="toolbar:workana" href="https://www.workana.com">Workana</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="China" analytics="toolbar:zhaopin" href="http://www.zhaopin.com">Zhaopin</FooterLink>
                <FooterLink linkRenderer={linkRenderer} partner="Australia" analytics="toolbar:jora+au" href="https://au.jora.com">Jora</FooterLink>
              </ToggleContainer>
              <ToggleContainer name="PartnerServicesToggle" label="Partner services" visible={isAU} data-automation="partner-services-toggle">
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:jobadder" href="https://jobadder.com/au">JobAdder</FooterLink>
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:jora+local" href="http://www.joralocal.com.au" data-automation="jora-local-link">Jora Local</FooterLink>
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:realestate+au" href="https://www.realestate.com.au/buy">realestate.com.au</FooterLink>
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:sidekicker" href="https://www.sidekicker.com.au/">Sidekicker</FooterLink>
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:ximble" href="https://www.ximble.com">Ximble</FooterLink>
              </ToggleContainer>
            </FooterNav>

            <FooterNav label="Connect">
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:contact+us" href="/contact-us">Contact us / FAQs</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:product+blog" href="http://productblog.seek.com.au">Product &amp; Tech Blog</FooterLink>
              <ToggleContainer name="SocialToggle" label="Social">
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:facebook" href="https://www.facebook.com/SEEK/" visible={isAU}>Facebook</FooterLink>
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:facebook" href="https://www.facebook.com/seeknz/" visible={isNZ}>Facebook</FooterLink>
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:instagram" href="https://www.instagram.com/seekau/" visible={isAU}>Instagram</FooterLink>
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:instagram" href="https://www.instagram.com/seeknz/" visible={isNZ}>Instagram</FooterLink>
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:twitter" href="https://twitter.com/seekjobs" visible={isAU}>Twitter</FooterLink>
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:twitter" href="https://twitter.com/seekjobsnz" visible={isNZ}>Twitter</FooterLink>
                <FooterLink linkRenderer={linkRenderer} analytics="toolbar:youtube" href="https://www.youtube.com/user/SEEKJobs">YouTube</FooterLink>
              </ToggleContainer>
            </FooterNav>

            <FooterNav label="Employers">
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:register+for+free" href={`https://talent.seek.${domainSuffix}/`}>Register for free</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:post+a+job+ad" href={`https://talent.seek.${domainSuffix}/`}>Post a job ad</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:products+prices" href={`https://talent.seek.${domainSuffix}/Support/OurProducts`}>Products &amp; prices</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:customer+service" href={`https://talent.seek.${domainSuffix}/ContactUs`}>Customer service</FooterLink>
              <FooterLink linkRenderer={linkRenderer} analytics="toolbar:insight+blog" href={`http://insightsresources.seek.${domainSuffix}`}>Insights &amp; Resources</FooterLink>
            </FooterNav>

            <nav className={styles.copyright}>
              <ScreenReaderOnly>
                <h1>Additional Links</h1>
              </ScreenReaderOnly>

              {
                linkRenderer({
                  'data-analytics': 'toolbar:privacy',
                  className: styles.navLink,
                  href: '/privacy',
                  children: 'Privacy'
                })
              }
              {
                linkRenderer({
                  'data-analytics': 'toolbar:terms+conditions',
                  className: styles.navLink,
                  href: '/terms',
                  children: 'Terms & Conditions'
                })
              }
              {
                linkRenderer({
                  'data-analytics': 'toolbar:seek+safely',
                  className: `${styles.navLink} ${styles.secondaryLink}`,
                  href: '/safe-job-searching',
                  children: 'SEEK safely'
                })
              }
              {
                linkRenderer({
                  'data-analytics': 'toolbar:site+map',
                  className: `${styles.navLink} ${styles.secondaryLink}`,
                  href: '/sitemap',
                  children: 'Site Map'
                })
              }
              <p className={styles.copyrightMessage}>{'\u00A9 SEEK. All rights reserved.'}</p>
            </nav>
          </div>
        </section>
      </footer>
    );
  }
}

/* eslint-disable react/no-multi-comp */
class ToggleContainer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    visible: PropTypes.bool,
    'data-automation': PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const { children, label, name, visible, 'data-automation': dataAutomation } = this.props;

    if (visible === false) {
      return null;
    }

    return (
      <li>
        <input id={name} className={styles.toggle} type="checkbox" data-automation={dataAutomation} />
        <label className={`${styles.navLink} ${styles.toggleLabel}`} htmlFor={name}>
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

class FooterLink extends Component {
  static propTypes = {
    analytics: PropTypes.string,
    href: PropTypes.string,
    visible: PropTypes.bool,
    className: PropTypes.string,
    partner: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    linkRenderer: PropTypes.func.isRequired
  };

  render() {
    const { partner, analytics, visible, className, linkRenderer, ...props } = this.props;

    // "visible === undefined" is equivalent to "visible === true" when visible is not passed in the react attributes;
    if (visible === false) {
      return null;
    }

    return (
      <li className={className}>
        {
          linkRenderer({
            'data-analytics': analytics,
            className: styles.navLink,
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

class FooterNav extends Component {
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
        <ul className={styles.list}>
          { children }
        </ul>
      </nav>
    );
  }
}
/* eslint-enable react/no-multi-comp */
