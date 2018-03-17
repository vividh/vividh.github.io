import React from 'react'
import Link from 'gatsby-link'

import Container from '../components/container';
import OpenSourceStuff from '../components/open-source';
// import profile from '../assets/profile.jpg';
import socialGuns from '../utils/social-guns';

// import styles from './index.module.scss';

const IndexPage = () => (
  <Container>
    {/* <img src={profile} className={styles.avatar} /> */}

    {/* <div>
      {socialGuns.map(gun => (
        <div className={styles.socialTag}>
          <a href={gun.link}>{gun.icon}</a>
        </div>
      ))}
    </div> */}

    <h2>Vividh Chandna</h2>

    <p>
      Hi! I am a Software Developer passionate for technology, the web, video games and everything else in between.
      I embrace the <a href='https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f' target='_blank'>JS fatigue</a>.
    </p>

    <p>
      Currently handling internal products & payments at Furlenco. Past FusionCharts.
    </p>

    <p>
      I like to build beautiful interfaces with a focus on usability. I also have full-stack exposure through my experience of working with technologies such as NodeJS and Ruby on Rails.
    </p>

    <p style={{ color: '#ababab' }}>
      Current Location: Bangalore, India
    </p>

    <hr />

    <div style={{ textAlign: 'center' }}>
      <span style={{ padding: '15px 40px' }}>
        <a href='/resume.pdf' target='_blank'>Résumé</a>
      </span>
      <span style={{ padding: '15px 40px' }}>
        <a href='https://github.com/vividh' target='_blank'>Github</a>
      </span>
      <span style={{ padding: '15px 40px' }}>
        <a href='https://twitter.com/vividhC' target='_blank'>Twitter</a>
      </span>
      <span style={{ padding: '15px 40px' }}>
        <a href='https://www.linkedin.com/in/vividh-chandna-a99a3040/' target='_blank'>LinkedIn</a>
      </span>
    </div>
    <br />

    <hr />

    <div>
      <h4>Open Source</h4>
      <OpenSourceStuff />
    </div>

    <br />
  </Container>
)

export default IndexPage
