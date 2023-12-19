import React from 'react';
import * as styles from '../../styles/projects.module.css';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className={`${styles.projects} mt-5 p-10 md:px-20 items-center md:flex justify-between`}
    >
      <div>
        <div className="flex flex-col md:flex-row justify-center mb-8 text-center items-center">
          <hr className="w-full h-0.5 bg-[#E25A27] border-0 mb-2 hidden md:block" />
          <h2 className="md:mx-10 mb-2 font-regular text-4xl md:text-4xl text-[#172432] uppercase whitespace-nowrap">
            Proyectos
          </h2>
          <hr className="w-full h-0.5 bg-[#E25A27] border-0 mb-2" />
        </div>

        <div className="flex flex-col md:flex-row text-[#172432]">
          <div className="md:w-1/2 mb-8 md:mr-4">
            <h2 className="mb-2 font-semibold text-4xl md:text-3xl text-[#172432]">Greenhouse</h2>
            <p className="text-sm">Angular, Bootstrap, JavaScript, MySQL, Spring, Tailwind, TypeScript</p>
          </div>

          <div className="md:w-1/2">
            <p>
              <span className="font-bold">Problema identificado:</span> Las fábricas de champiñones en Perú registran el
              estado y progreso de sus cultivos en hojas de papel. Este método es arcaico, vulnerable y difícil de
              mantener.
            </p>
            <br />
            <p>
              <span className="font-bold">Solución:</span> Aplicación web de una sola página que impulsa la
              digitalización en fábricas de champiñones. Con Greenhouse, los trabajadores pueden registrar en tiempo
              real las actividades realizadas, y los administradores pueden supervisar remotamente el estado de los
              cultivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
