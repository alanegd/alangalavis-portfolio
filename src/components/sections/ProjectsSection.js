import React from 'react'
import * as styles from '../../styles/projects.module.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className={`${styles.projects} mt-5 p-10 md:px-20 items-center md:flex justify-between`}>
      <div>
        <div class="flex flex-col mb-8 text-center md:text-start items-center md:items-start">
          <h2 class="mb-2 font-semibold text-4xl md:text-4xl text-[#172432] uppercase">Proyectos.</h2>
          <hr class="w-3/4 md:w-32 h-0.5 bg-[#FF7757] border-0"/>
        </div>

        <div class="flex flex-col md:flex-row text-[#172432]">
          <div class="md:w-1/2 mb-8 md:mr-4 ">
            <h2 class="mb-2 font-semibold text-4xl md:text-3xl text-[#172432]">Greenhouse</h2>
            <p class="text-sm">Angular, Bootstrap, JavaScript, MySQL, Spring, Tailwind, TypeScript</p>
          </div>
          <div class="md:w-1/2">
            <p><span class="font-bold ">Problema identificado:</span> Las fábricas de champiñones en Perú registran el estado y progreso de sus cultivos en hojas de papel. Este método es arcaico vulnerable y difícil de mantener.</p>
            <br/>
            <p><span class="font-bold ">Solución:</span>  Aplicación web de una sola página que impulsa la digitalización en fábricas de champiñones. Con Greenhouse, los trabajadores pueden registrar en tiempo real las actividades realizadas, y los administradores pueden supervisar remotamente el estado de los cultivos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
