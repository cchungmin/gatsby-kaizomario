import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <div class="ctn-curtain section-footer">
      <div class="section-inner masthead container">
        <section class="profile">
          <div class="kaizo-mario-container">
            <div class="kaizo-mario-image-container">
              <Image
                className="kaizo-mario-image"
              />
            </div>
            <div class="kaizo-mario-pulse"></div>
          </div>
          <div class="kaizo-mario-name">
            Chung-Min Cheng
          </div>
          <div class="tagline">
            Web developer in Tokyo.
          </div>
        </section>
        <section class="social">
          <ul class="social list-inline">
            <li>
              <a
                class="links"
                target="_blank"
                href="https://www.facebook.com/chungmin.cheng.9"
                rel="noopener noreferrer"
              >
                <i class="icon-facebook-sign"></i>
              </a>
            </li>
            <li>
              <a
                class="links"
                target="_blank"
                href="http://github.com/cchungmin"
                rel="noopener noreferrer"
              >
                <i class="icon-github-sign"></i>
              </a>
            </li>
            <li>
              <a
                class="links"
                target="_blank"
                href="http://plus.google.com/101928195101978330342"
                rel="noopener noreferrer"
              >
                <i class="icon-google-plus-sign"></i>
              </a>
            </li>
            <li>
              <a
                class="links"
                target="_blank"
                href="https://jp.linkedin.com/in/chungmincheng"
                rel="noopener noreferrer"
              >
                <i class="icon-linkedin-sign"></i>
              </a>
            </li>
            <li>
              <a
                class="links"
                target="_blank"
                href="https://twitter.com/ChungMinCheng"
                rel="noopener noreferrer"
              >
                <i class="icon-twitter-sign"></i>
              </a>
            </li>
          </ul>
          <div>
            <a
              target="_blank"
              class="blog-link"
              href="https://www.kaizomario.com/blog/"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </section>
        <section class="experience">
          <div class="experience-left"></div>
          <div class="experience-right"></div>
        </section>
      </div>
    </div>
  </Layout>
)

export default IndexPage
