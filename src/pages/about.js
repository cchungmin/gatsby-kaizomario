import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div class="jumbo">
      <div class="about-block right tomster">
        <h2>About Chung-Min</h2>
        <p>
          I love to create beautiful Web experience with latest technologies. I
          hope any user can have pleasant feelings while surfing on the
          internet, no matter what devices they use and no matter where they
          are. I always try the best to make every work to reach Web and company
          standard because I believe great works should not just look great to
          the users, but also its code should look great to the developers.
        </p>
      </div>
      <div class="about-block work-experience">
        <h3>Work Experience</h3>
        <h4>Sr. Front-End Developer at Global Fintech Company</h4>
        <p>Tokyo, Japan. 2018.03 -</p>
        <h4>Front-End Engineer at Cimpress</h4>
        <p>Tokyo, Japan. 2016.03 - 2018.02</p>
        <h4>Contract Web Developer at Robert Walters for Google</h4>
        <p>Tokyo, Japan. 2014.03 - 2016.02</p>
        <h4>Software Engineer at Softbank Mobile</h4>
        <p>Tokyo, Japan. 2013.07 - 2014.02</p>
        <h4>Web App Developer at En-Japan. Inc</h4>
        <p>Tokyo, Japan. 2011.10 - 2013.07</p>
        <h4>Software Engineer at American Megatrends. Inc</h4>
        <p>Taipei, Taiwan. 2011.03 - 2011.09</p>
      </div>
      <div class="about-block education">
        <h3>Education Background</h3>
        <h4>University of Glasgow</h4>
        <p>
          M.Sc in Information Technology, School of Computing Science, Scotland,
          UK
        </p>
        <h4>Fu-Jen Catholic University</h4>
        <p>B.BA in Information Management, College of Management, Taiwan</p>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
