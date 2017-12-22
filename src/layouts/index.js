import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import AnimatedKeyboard from '../components/animated-keyboard';

const Header = () => (
  <Link to="/" style={{ textDecoration: 'none', color: 'initial' }}>
    <div style={{ position: 'relative', marginBottom: 15 }}>
      <div style={{ opacity: 0.4, overflow: 'hidden', height: 200 }}>
        <div style={{ transform: 'rotateZ(-5deg) scale(1.3) translateX(150px) translateY(-60px)', pointerEvents: 'none' }}>
          <AnimatedKeyboard highlightKeys={true} spellThis='mywittyblog' />
        </div>
      </div>
    </div>
  </Link>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='We with thoughts'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 20,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
