import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import '../styles/layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagline
          logo {
            src
            alt
          }
          logoText
          defaultTheme
          copyrights
          mainMenu {
            title
            path
          }
          showMenuItems
          menuMoreText
        }
      }
    }
  `)
  const {
    title,
    tagline,
    logo,
    logoText,
    defaultTheme,
    mainMenu,
    showMenuItems,
    menuMoreText,
    copyrights,
  } = data.site.siteMetadata

  return (
    <div className="container">
      <Header
        siteTitle={title}
        siteLogo={logo}
        logoText={logoText}
        taglineText={tagline}
        defaultTheme={defaultTheme}
        mainMenu={mainMenu}
        mainMenuItems={showMenuItems}
        menuMoreText={menuMoreText}
      />
      <div className="content">{children}</div>
      <Footer copyrights={copyrights} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
