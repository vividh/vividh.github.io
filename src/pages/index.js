import React from 'react'
import Link from 'gatsby-link'

import Container from '../components/container';
import profile from '../assets/profile.jpg';
import socialGuns from '../utils/social-guns';

import styles from './index.module.scss';

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

    <p>
      Doing this software dev thing till my Hogwarts letter arrives. I embrace the <a href='https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f' target='_blank'>JS fatigue</a>.
      <br />
      <br />
      Love to play <a href=''>video games</a>.
      <br />
      <br />
      Reach out to me here for interesting projects.
    </p>

    <hr />

    <div style={{ textAlign: 'center' }}>
      <span style={{ padding: '15px 40px' }}>
        <a href='' target='_blank'>Experience</a>
      </span>
      <span style={{ padding: '15px 40px' }}>
        <a href='' target='_blank'>Résumé</a>
      </span>
      <span style={{ padding: '15px 40px' }}>
        <a href='https://github.com/vividh' target='_blank'>Github</a>
      </span>
      <span style={{ padding: '15px 40px' }}>
        <a href='https://twitter.com/vividhC' target='_blank'>Twitter</a>
      </span>
    </div>
  </Container>
)

export default IndexPage
