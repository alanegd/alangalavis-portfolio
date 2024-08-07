import React from "react";
import * as styles from "../../styles/about.module.css";
import aboutImage from "../../images/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  return (
    <section
      id="about"
      className={`${styles.about} md:px-20 items-center md:flex justify-between`}
    >
      <div className="max-w-screen-lg mx-auto  my-10 p-10 ">
        <div className="flex flex-col md:flex-row justify-center mb-12 text-center items-center">
          <hr className="w-full h-0.5 bg-[#E25A27] border-0 mb-2 hidden md:block" />
          <h2 className="md:mx-10 mb-2 text-4xl md:text-4xl text-[#172432] uppercase whitespace-nowrap">
            Acerca de mí
          </h2>
          <hr className="w-full h-0.5 bg-[#E25A27] border-0 mb-2" />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 text-[#172432]">
          <div className="md:w-3/5 mb-8 md:mr-4">
            <p>
              Me llamo Alan Galavis, soy estudiante del cuarto año de la carrera
              de Ingeniería de Software en la Universidad Peruana de Ciencias
              Aplicadas.
            </p>
            <br />
            <p>
              Mi formación académica se ha centrado en el diseño y desarrollo de
              proyectos de alta calidad, desde simples landing pages hasta
              aplicaciones web con RESTful APIs. Mi objetivo es crear software
              eficiente y escalable que brinde las mejores experiencias de
              usuario. Actualmente, estoy especializándome en gestión de
              proyectos ágiles.
            </p>
            <br />
            <p>
              Activamente busco oportunidades que me permitan adquirir las
              experiencias necesarias para seguir perfilándome como futuro
              profesional.
            </p>
          </div>

          <div className="md:w-1/4 flex flex-col items-center">
            <div className="pt-2 w-full bg-[#22312E] rounded-t-md">
              <img src={aboutImage} alt="alanegd" loading="lazy" />
            </div>
            <a
              className="py-3 w-full text-white text-center bg-[#E25A27] hover:bg-[#FA652E] cursor-pointer drop-shadow-md rounded-b-md"
              href="/CV - Alan Galavis.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex justify-center items-baseline">
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ marginRight: "8px", width: "14px" }}
                />
                <h2 className="text-base">Descargar CV</h2>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
