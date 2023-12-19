import React from 'react'
import * as styles from '../../styles/about.module.css';
import aboutImage from '../../images/about.png';

export default function AboutSection() {
  return (
    <section id="about" className={`${styles.about}  mt-5 p-10 md:px-20 items-center md:flex justify-between`}>
      <div>
        <div class="flex flex-col justify-center mb-8 text-center md:text-start items-center md:items-start">
          <h2 class="mb-2 font-semibold text-4xl md:text-4xl text-[#172432] uppercase">Acerca de mí.</h2>
          <hr class="w-3/4 md:w-32 h-0.5 bg-[#FF7757] border-0"/>
        </div>

        <div class="flex flex-col md:flex-row gap-8 text-[#172432]">
          <div class="md:w-3/5 mb-8 md:mr-4 ">
            <p>Me llamo Alan Galavis, soy estudiante del cuarto año de la carrera de Ingeniería de Software.</p>
            <br/>
            <p>Mi formación académica se ha centrado en el diseño y desarrollo de aplicaciones full stack de alta calidad. Actualmente, estoy especializándome en gestión de proyectos ágiles.</p>
            <br/>
            <p>Activamente busco oportunidades que me permitan adquirir las experiencias necesarias para seguir perfilándome como futuro profesional.</p>
          </div>

          <div class="md:w-1/4 flex flex-col items-center">
            <div class="pt-2 w-full bg-[#314059]">
              <img src={aboutImage} alt="alanegd"/>
            </div>
            <a class="py-3 w-full text-white text-center bg-[#ec5f4d] hover:bg-[#ff7c67] cursor-pointer" href="/CV - Alan Galavis.pdf" target="_blank" rel="noopener noreferrer">Descargar CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}
