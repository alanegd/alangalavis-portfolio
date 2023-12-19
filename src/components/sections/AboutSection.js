import React from 'react';
import * as styles from '../../styles/about.module.css';
import aboutImage from '../../images/about.png';

export default function AboutSection() {
  return (
    <section id="about" className={`${styles.about} mt-5 p-10 md:px-20 items-center md:flex justify-between`}>
      <div>
        <div className="flex flex-col md:flex-row justify-center mb-8 text-center items-center">
          <hr className="w-full h-0.5 bg-[#E25A27] border-0 mb-2 hidden md:block" />
          <h2 className="md:mx-10 mb-2 text-4xl md:text-4xl text-[#172432] uppercase whitespace-nowrap">
            Acerca de mí
          </h2>
          <hr className="w-full h-0.5 bg-[#E25A27] border-0 mb-2" />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 text-[#172432]">
          <div className="md:w-3/5 mb-8 md:mr-4">
            <p>
              Me llamo Alan Galavis, soy estudiante del cuarto año de la carrera de Ingeniería de Software.
            </p>
            <br />
            <p>
              Mi formación académica se ha centrado en el diseño y desarrollo de aplicaciones full stack de alta calidad.
              Actualmente, estoy especializándome en gestión de proyectos ágiles.
            </p>
            <br />
            <p>
              Activamente busco oportunidades que me permitan adquirir las experiencias necesarias para seguir perfilándome
              como futuro profesional.
            </p>
          </div>

          <div className="md:w-1/4 flex flex-col items-center">
            <div className="pt-2 w-full bg-[#22312E]">
              <img src={aboutImage} alt="alanegd" />
            </div>
            <a
              className="py-3 w-full text-white text-center bg-[#E25A27] hover:bg-[#FA652E] cursor-pointer shadow-md"
              href="/CV - Alan Galavis.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
