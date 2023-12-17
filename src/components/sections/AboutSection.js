import React, { useEffect } from 'react'
import * as styles from '../../styles/about.module.css';
import aboutImage from '../../images/about.png';


export default function AboutSection() {
  return (
    <section id="about" className={`${styles.about} mt-5 p-10 md:px-20 items-center md:flex`}>
      <div>
        <div class="flex flex-col mb-8 text-center md:text-start items-center md:items-start">
          <h1 class="mb-4 font-semibold text-3xl md:text-4xl text-[#EBB073] uppercase">Acerca de mí.</h1>
          <hr class="w-3/4 md:w-32 h-1.5 bg-[#EBB073] border-0"/>
        </div>

        <div class="flex flex-col md:flex-row gap-8 text-white">
          <div class="md:w-3/2 mb-8 md:mr-4 ">
            <p>Me llamo Alan Galavis, soy estudiante del cuarto año de la carrera de Ingeniería de Software.</p>
            <br/>
            <p>Mi formación académica se ha centrado en el diseño y desarrollo de aplicaciones full stack de alta calidad. Actualmente, estoy especializándome en gestión de proyectos ágiles.</p>
            <br/>
            <p>Activamente busco oportunidades que me permitan adquirir las experiencias necesarias para seguir perfilándome como futuro profesional.</p>
          </div>

          <div class="md:min-w-3/2 flex flex-col items-center">
            <div class="pt-2 bg-[#32445F]">
              <img src={aboutImage} alt="alanegd"/>
            </div>
            <a class="py-3 w-full text-white text-center bg-[#ec5f4d] hover:bg-[#ff7c67] cursor-pointer" href="/" download>Descargar CV</a>
          </div>
        </div>
      </div>
      
    </section>
  )
}
