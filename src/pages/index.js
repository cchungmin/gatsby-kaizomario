import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SocialLinksDataQuery {
        socialLinkData {
          socialLink {
            facebook
            github
            linkedin
            twitter
          }
        }
      }
    `}
    render={({ socialLinkData }) => (
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
                {
                  Object.keys(socialLinkData.socialLink).map(el => (
                    <li>
                      <a
                        class="links"
                        target="_blank"
                        href={socialLinkData.socialLink[el]}
                        rel="noopener noreferrer"
                      >
                        <i class={`icon-${ el }-sign`}></i>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </section>
            <section class="experience">
              <div class="experience-left"></div>
              <div class="experience-right"></div>
            </section>
          </div>
        </div>
      </Layout>
    )
    }
  />
)

export default IndexPage
