import React from 'react';

// TODO: pull from Github, feed as GraphQL data layer
const openSource = [
  {
    project: {
      title: 'React Material UI',
      link: 'https://github.com/mui-org/material-ui'
    },
    contributions: [
      {
        title: '[codemod] Update import paths for colors v1',
        link: 'https://github.com/mui-org/material-ui/pull/8311'
      },
      {
        title: '[codemod] Update import paths for svg-icons v1',
        link: 'https://github.com/mui-org/material-ui/pull/8333'
      }
    ]
  }
];

export default props => (
  <div>
    {openSource.map(({ project, contributions }) => (
      <p>
        <a href={project.link} target='_blank'>{project.title}</a>
        <br />
        <br />
        <ul>
          {contributions.map(c => (
            <li>
              <a href={c.link} target='_blank'>
                <small>{c.title}</small>
              </a>
            </li>
          ))}
        </ul>
      </p>
    ))}
  </div>
);