import React from 'react';
import * as styles from '../../styles/projects.module.css';
import Project from '../layout/Project';
import projectsData from '../../projects/projects.json';


export default function ProjectsSection() {
  const projects = projectsData;

  return (
    <section
      id="projects"
      className={`${styles.projects} mt-5 p-10 md:px-20 items-center md:flex justify-between`}
    >
      <div className="max-w-[893px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center text-center items-center">
          <hr className="w-full h-0.5 bg-[#E25A27] border-0 mb-2 hidden md:block" />
          <h2 className="md:mx-10 mb-2 font-regular text-4xl md:text-4xl text-[#172432] uppercase whitespace-nowrap">
            Proyectos
          </h2>
          <hr className="w-full h-0.5 bg-[#E25A27] border-0 mb-2" />
        </div>

        <div className="text-[#172432]">
          {projects.map((project, index) => (
          <div key={index} className="mt-12">
            <Project project={project} />
          </div>
          ))}
        </div>

      </div>
    </section>
  );
}
