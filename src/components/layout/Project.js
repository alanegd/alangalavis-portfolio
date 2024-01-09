import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import Image from '../../infrastructure/graphql/Image.js';

export default function Project({ project }) {
  const { title, problem, solution, stack, image, siteLink, repositories } = project;

  return (
    <div className="flex flex-col text-[#172432]">
      <div className="w-full mb-9">
        <h3 className="mb-3 font-semibold text-4xl md:text-3xl text-[#172432]">{title}</h3>
        <p className="text-sm">{stack.join(', ')}</p>
      </div>

      <div className="flex flex-col lg:flex-row md:gap-16">
        <div className="lg:w-[76%] mb-9">
          <Image filename={image} alt={title} classes="w-full drop-shadow-md" />
        </div>

        <div className="lg:w-1/2">
          <p><span className="font-bold">Problema identificado:</span> {problem}</p>
          <br />
          <p><span className="font-bold">Solución:</span> {solution}</p>
          <br />

          <hr className="w-full h-0.5 bg-black border-0 mb-6" />

          <div className="flex flex-col-reverse md:flex-row gap-3 justify-between">
            <ul>
              {repositories.map((repo, index) => {
                const [displayText, repoLink] = repo.split('|');
                return repoLink ? (
                  <li className="mb-3" key={index}>
                    <a className="text-[#E25A27] hover:text-[#172432] underline" href={repoLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLink} style={{ marginRight: '8px', width: '14px' }} />{displayText}</a>
                  </li>
                ) : null;
              })}
            </ul>

            {siteLink && (
                <span>
                  <a className="text-[#E25A27] underline hover:text-[#172432]" href={siteLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLink} style={{ marginRight: '8px', width: '14px' }} />Ver demo</a>
                </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
