import styles from './Footer.less';

import React, { Component, PropTypes } from 'react';

import ChevronIcon from '../../icons/ChevronIcon/ChevronIcon';
import ScreenReaderOnly from '../Accessibility/ScreenReaderOnly';
import ExternalLink from '../ExternalLink/ExternalLink';

export default class Footer extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired
  };

  render() {
    const { locale } = this.props;

    return (
      <footer className={styles.root} role="contentinfo">
        <ScreenReaderOnly>
          <h1>Footer</h1>
        </ScreenReaderOnly>

        <div className={styles.content}>
          <nav className={styles.category}>
            <h1 className={styles.heading}>Tools</h1>
            <ul className={styles.list}>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:profile" className={styles.navLink} href="https://www.seek.com.au/profile/">Profile</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:my+activity" className={styles.navLink} href="https://www.seek.com.au/myactivity#favourite">Saved searches</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:favourite" className={styles.navLink} href="https://www.seek.com.au/my-activity/saved-jobs">Saved jobs</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:applied" className={styles.navLink} href="https://www.seek.com.au/my-activity/applied-jobs">Applied jobs</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:advice+tips" className={styles.navLink} href="https://www.seek.com.au/career-advice/">Advice &amp; tips</ExternalLink>
              </li>
              {
                locale === 'AU' &&
                <li>
                  <ExternalLink locale={locale} analytics="toolbar:companies" className={styles.navLink} href="https://www.seek.com.au/companies/">Company reviews</ExternalLink>
                </li>
              }
            </ul>
          </nav>
          <nav className={styles.category}>
            <h1 className={styles.heading}>Company</h1>
            <ul className={styles.list}>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:about+seek" className={styles.navLink} href="https://www.seek.com.au/investor/about-us">About SEEK</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:media" className={styles.navLink} href="https://www.seek.com.au/investor/news-media">Media</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:work+for+seek" className={styles.navLink} href="https://www.seek.com.au/work-for-seek">Work for SEEK</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:investor+centre" className={styles.navLink} href="https://ir.seek.com.au">Investor centre</ExternalLink>
              </li>
              <li>
                <input id="InternationalPartnersToggle" className={styles.toggle} type="checkbox" />
                <label className={`${styles.navLink} ${styles.toggleLabel}`} htmlFor="InternationalPartnersToggle">
                  International partners
                  <ChevronIcon direction="down" className={styles.chevron} svgClassName={styles.chevronSvg} />
                </label>
                <ul className={styles.toggleContainer}>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:babajob" className={styles.navLink} href="http://www.babajob.com">BabaJob</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; India</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:bdjobs" className={styles.navLink} href="http://www.bdjobs.com">Bdjobs</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; Bangladesh</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:brighter+monday" className={styles.navLink} href="https://www.brightermonday.com">Brighter Monday</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; E Africa</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:catho" className={styles.navLink} href="http://www.catho.com.br">Catho</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; Brazil</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:jobberman" className={styles.navLink} href="https://www.jobberman.com">Jobberman</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; W Africa</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:jobsdb" className={styles.navLink} href="http://www.jobsdb.com">jobsDB</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; SE Asia</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:jobstreet" className={styles.navLink} href="http://www.jobstreet.com">JobStreet</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; SE Asia</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:jora+int" className={styles.navLink} href="https://www.jora.com">Jora</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; Worldwide</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:manager" className={styles.navLink} href="http://www.manager.com.br">Manager</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; Brazil</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:occ+mundial" className={styles.navLink} href="https://www.occ.com.mx">OCC Mundial</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; Mexico</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:workana" className={styles.navLink} href="https://www.workana.com">Workana</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; Latin America</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:zhaopin" className={styles.navLink} href="http://www.zhaopin.com">Zhaopin</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; China</span>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:jora+au" className={styles.navLink} href="https://au.jora.com">Jora</ExternalLink>
                    <span className={styles.internationalPartnerCountry}> &mdash; Australia</span>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <nav className={styles.category}>
            <h1 className={styles.heading}>Connect</h1>
            <ul className={styles.list}>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:contact+us" className={styles.navLink} href="https://www.seek.com.au/contact-us">Contact us / FAQs</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:product+blog" className={styles.navLink} href="http://productblog.seek.com.au">Product &amp; Tech Blog</ExternalLink>
              </li>
              <li>
                <input id="SocialToggle" className={styles.toggle} type="checkbox" />
                <label className={`${styles.navLink} ${styles.toggleLabel}`} htmlFor="SocialToggle">
                  Social
                  <ChevronIcon direction="down" className={styles.chevron} svgClassName={styles.chevronSvg} />
                </label>
                <ul className={styles.toggleContainer}>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:facebook" className={styles.navLink} href="https://www.facebook.com/SEEK/">Facebook</ExternalLink>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:twitter" className={styles.navLink} href="https://twitter.com/seekjobs">Twitter</ExternalLink>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:google+" className={styles.navLink} href="https://plus.google.com/+seekau">Google+</ExternalLink>
                  </li>
                  <li>
                    <ExternalLink locale={locale} analytics="toolbar:youtube" className={styles.navLink} href="https://www.youtube.com/user/SEEKJobs">YouTube</ExternalLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <nav className={styles.category}>
            <h1 className={styles.heading}>Employers</h1>
            <ul className={styles.list}>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:register+for+free" className={styles.navLink} href="https://talent.seek.com.au/">Register for free</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:post+a+job+ad" className={styles.navLink} href="https://talent.seek.com.au/">Post a job ad</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:products+prices" className={styles.navLink} href="https://talent.seek.com.au/products/jobads">Products &amp; prices</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:customer+service" className={styles.navLink} href="https://talent.seek.com.au/ContactUs">Customer service</ExternalLink>
              </li>
              <li>
                <ExternalLink locale={locale} analytics="toolbar:insight+blog" className={styles.navLink} href="http://insightsresources.seek.com.au/">Insights &amp; Resources</ExternalLink>
              </li>
            </ul>
          </nav>
          <nav className={styles.copyright}>
            <ScreenReaderOnly>
              <h1>Additional Links</h1>
            </ScreenReaderOnly>
            <ExternalLink locale={locale} analytics="toolbar:privacy" className={styles.navLink} href="https://www.seek.com.au/privacy">Privacy</ExternalLink>
            <ExternalLink locale={locale} analytics="toolbar:terms+conditions" className={styles.navLink} href="https://www.seek.com.au/terms">Terms &amp; Conditions</ExternalLink>
            <ExternalLink locale={locale} analytics="toolbar:seek+safely" className={`${styles.navLink} ${styles.secondaryLink}`} href="https://www.seek.com.au/safe-job-searching">SEEK safely</ExternalLink>
            <ExternalLink locale={locale} analytics="toolbar:site+map" className={`${styles.navLink} ${styles.secondaryLink}`} href="https://www.seek.com.au/sitemap">Site Map</ExternalLink>
            <p className={styles.copyrightMessage}>{'\u00A9 SEEK. All rights reserved.'}</p>
          </nav>
        </div>

      </footer>
    );
  }

}
