import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SKILLS = {
  javascript: 'javascript',
  angularjs: 'angularjs',
  sass: 'sass',
  djangoTemplates: 'django-templates',
  html5: 'html5',
}

const PROJECTS = [
  {
    name: 'Google Ignite Malaysia',
    link: 'https://www.google.com/intl/en_my/landing/ignite/index.html',
    skills: [
      'javascript',
      'angularjs',
      'sass',
      'djangoTemplates',
      'html5',
    ],
    role: 'Primary developer',
    detail: 'Helps Google promote AdWords certificate to students and push partnerships with enterprises.',
  },
]

const WorkPage = () => (
  <Layout>
    <SEO
      title="Work"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <div class="jumbo">
      <div class="right tomster"></div>
      <h2>My Developer Story</h2>
      <div class="project-block">
        <h3>
          <a href="https://www.google.com/intl/en_my/landing/ignite/index.html" target="_blank" class="project-title" rel="noopener noreferrer">
            Google Ignite Malaysia
          </a>
        </h3>
        <ul class="skills">
          <li>javascript</li>
          <li>angularjs</li>
          <li>sass</li>
          <li>django-templates</li>
          <li>html5</li>
        </ul>
        <p>Helps Google promote AdWords certificate to students and push partnerships with enterprises.</p>
        <p>Primary developer</p>
      </div>
      <div class="project-block">
        <h3>
          <a href="https://www.google.co.jp/adwords/learn/index.html" target="_blank" class="project-title" rel="noopener noreferrer">
          Google AdWords Learn
          </a>
        </h3>
        <ul class="skills">
          <li>javascript</li>
          <li>google-closure-library</li>
          <li>sass</li>
          <li>html5</li>
        </ul>
        <p>Help potential customers understand how to use AdWords tool to improve site usability.</p>
        <p>Primary developer</p>
      </div>
      <div class="project-block">
        <h3>
          <a href="https://www.google.co.jp/adwords/learn/index.html" target="_blank" class="project-title" rel="noopener noreferrer">
          Google Ignite Taiwan
          </a>
        </h3>
        <ul class="skills">
          <li>javascript</li>
          <li>angularjs</li>
          <li>google-closure-library</li>
          <li>django-templates</li>
          <li>sass</li>
          <li>html5</li>
          <li>d3.js</li>
        </ul>
        <p>Helps Google promote AdWords certificate to students and push partnerships with enterprises.</p>
        <p>Primary developer</p>
      </div>
      <div class="project-block">
        <h3>YouTube creator site</h3>
        <ul class="skills">
          <li>javascript</li>
          <li>css3</li>
          <li>google-closure-library</li>
          <li>django-templates</li>
          <li>html5</li>
        </ul>
        <p>Encourages YouTube users to upload creative videos.</p>
        <p>Primary developer</p>
      </div>
      <div class="project-block">
        <h3>Google for Work event page</h3>
        <ul class="skills">
          <li>javascript</li>
          <li>angularjs</li>
          <li>google-closure-library</li>
          <li>sass</li>
          <li>html5</li>
        </ul>
        <p>Event page for pushing marketing events of Google products.</p>
        <p>Primary developer</p>
      </div>
    </div>
  </Layout>
)

export default WorkPage
