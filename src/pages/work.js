import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SKILLS = {
  javascript: 'javascript',
  angularjs: 'angularjs',
  sass: 'sass',
  djangoTemplates: 'django-templates',
  html5: 'html5',
};

const PROJECTS = [
  {
    name: 'Google Ignite Malaysia',
    link: 'https://www.google.com/intl/en_my/landing/ignite/index.html',
    skills: ['javascript', 'angularjs', 'sass', 'djangoTemplates', 'html5'],
    role: 'Primary developer',
    detail:
      'Helps Google promote AdWords certificate to students and push partnerships with enterprises.',
  },
];

const WorkPage = () => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
    <div class="jumbo">
      <div class="right tomster" />
      <h2>Past Projects</h2>
      <div class="project-block">
        <h3>A number of exchange websites</h3>
        <ul class="skills">
          <li>React.js</li>
          <li>Redux</li>
          <li>Next.js</li>
          <li>styled-components</li>
          <li>Webpack</li>
          <li>WebSocket</li>
          <li>Html5</li>
        </ul>
        <p>Develops frontend systems for a leading fintech company.</p>
      </div>
      <div class="project-block">
        <h3>We-shirts</h3>
        <ul class="skills">
          <li>TypeScript</li>
          <li>AngularJS</li>
          <li>SASS</li>
          <li>Gulp</li>
          <li>RoR</li>
          <li>Html5</li>
        </ul>
        <p>Helps users create team T-shirts with online tool.</p>
      </div>
      <div class="project-block">
        <h3>Google Ignite Malaysia</h3>
        <ul class="skills">
          <li>AngularJS</li>
          <li>SASS</li>
          <li>Django Templates</li>
          <li>Html5</li>
        </ul>
        <p>
          Helps Google promote AdWords certificate to students and push
          partnerships with enterprises.
        </p>
      </div>
      <div class="project-block">
        <h3>
          <a
            href="https://www.google.co.jp/adwords/learn/index.html"
            target="_blank"
            class="project-title"
            rel="noopener noreferrer"
          >
            Google AdWords Learn
          </a>
        </h3>
        <ul class="skills">
          <li>Google Closure Tools</li>
          <li>SASS</li>
          <li>Html5</li>
        </ul>
        <p>
          Help potential customers understand how to use AdWords tool to improve
          site usability.
        </p>
      </div>
      <div class="project-block">
        <h3>
          <a
            href="https://get.google.com/intl/zh_TW/landing/ignite/"
            target="_blank"
            class="project-title"
            rel="noopener noreferrer"
          >
            Google Ignite Taiwan
          </a>
        </h3>
        <ul class="skills">
          <li>AngularJS</li>
          <li>Google Closure Tools</li>
          <li>Django Templates</li>
          <li>SASS</li>
          <li>Html5</li>
          <li>d3.js</li>
        </ul>
        <p>
          Helps Google promote AdWords certificate to students and push
          partnerships with enterprises.
        </p>
      </div>
      <div class="project-block">
        <h3>YouTube creator site</h3>
        <ul class="skills">
          <li>CSS3</li>
          <li>Google Closure Tools</li>
          <li>Django Templates</li>
          <li>Html5</li>
        </ul>
        <p>Encourages YouTube users to upload creative videos.</p>
      </div>
      <div class="project-block">
        <h3>Google for Work event page</h3>
        <ul class="skills">
          <li>AngularJS</li>
          <li>Google Closure Tools</li>
          <li>SASS</li>
          <li>Html5</li>
        </ul>
        <p>Event page for pushing marketing events of Google products.</p>
      </div>
    </div>
  </Layout>
);

export default WorkPage;
