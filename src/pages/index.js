import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const socialLinkData = {
  socialLink: {
    github: 'http://github.com/cchungmin',
    linkedin: 'http://jp.linkedin.com/pub/chung-min-cheng/34/410/706',
  },
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="ctn-curtain section-footer">
      <div class="section-inner masthead container">
        <section class="profile">
          <div class="kaizo-mario-container">
            <div class="kaizo-mario-image-container">
              <Image className="kaizo-mario-image" />
            </div>
            <div class="kaizo-mario-pulse" />
          </div>
          <div class="kaizo-mario-name">Chung-Min Cheng</div>
          <div class="tagline">Web developer in Tokyo.</div>
        </section>
        <section class="social">
          <ul class="social list-inline">
            {Object.keys(socialLinkData.socialLink).map(el => (
              <li>
                <a
                  class="links"
                  target="_blank"
                  href={socialLinkData.socialLink[el]}
                  rel="noopener noreferrer"
                >
                  <i class={`icon-${el}-sign`} />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section class="experience">
          <div class="experience-left" />
          <div class="experience-right" />
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
