import React from 'react';
import * as styles from '../../styles/scroller.module.css';
import projectsData from '../../projects/projects.json';
import Image from '../../infrastructure/graphql/Image.js';

export default function InfiniteHorizontalScroller({ speed = 6500 }) {
  const projects = projectsData.filter(project => project.featured === false);;

  return (
    <div className="max-w-screen-lg my-10 mx-auto">
      <div className={`${styles.scroller} inner`}>
        <div className="wrapper flex">
          <section style={{ "--speed": `${speed}ms` }}>
            {projects.map((project, index) => (
            <a href={project.siteLink} key={index} className="image" target="_blank" rel="noopener noreferrer">
              <Image filename={project.image} alt={project.title} />
              <h2 className="text-xl">{project.title}</h2>
              <p className="mt-1 text-sm">{project.stack.join(', ')}</p>
            </a>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {projects.map((project, index) => (
            <a href={project.siteLink} key={index} className="image" target="_blank" rel="noopener noreferrer">
              <Image filename={project.image} alt={project.title} />
              <h2 className="text-xl">{project.title}</h2>
              <p className="mt-1 text-sm">{project.stack.join(', ')}</p>
            </a>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {projects.map((project, index) => (
            <a href={project.siteLink} key={index} className="image" target="_blank" rel="noopener noreferrer">
              <Image filename={project.image} alt={project.title} />
              <h2 className="text-xl">{project.title}</h2>
              <p className="mt-1 text-sm">{project.stack.join(', ')}</p>
            </a>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}