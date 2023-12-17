import React from 'react'
import * as styles from '../../styles/projects.module.css';

export default function ProjectsSection() {
  return (

    <section id="about" className={`${styles.about} mt-5 p-10 md:px-20 items-center md:flex`}>
      <div>
        <div class="flex flex-col mb-8 text-center md:text-start items-center md:items-start">
          <h1 class="mb-4 font-semibold text-3xl md:text-4xl text-[#EBB073] uppercase">Proyectos.</h1>
          <hr class="w-3/4 md:w-32 h-1.5 bg-[#EBB073] border-0"/>
        </div>

        <div class="flex flex-col md:flex-row text-white">
          <div class="mb-8">
          </div>
        </div>
      </div>
    </section>
  )
}
