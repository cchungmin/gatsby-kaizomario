import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div class="menu">
    <div class="left links">
      <div class="sticky">
        <div class="sticky-image">
          <Link className="nav-link home-link" to="/">
            Home
          </Link>
          <Link className="nav-link about-link" to="/about/">
            About
          </Link>
          <Link className="nav-link work-link" to="/work/">
            Work
          </Link>
        </div>
        <div class="sticky-social">
          <ul class="list-inline">
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
        </div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
