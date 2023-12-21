import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

export default function Project({ project }) {
  const { title, problem, solution, stack, siteLink, repositories } = project;

  return (
    <div className="flex flex-col md:flex-row md:gap-7 text-[#172432]">
      <div className="md:w-1/2 mb-9">
        <h2 className="mb-3 font-semibold text-4xl md:text-3xl text-[#172432]">{title}</h2>
        <p className="text-sm">{stack.join(', ')}</p>
      </div>

      <div className="md:w-1/2">
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
                <li className="mb-3 text-[#E25A27] underline" key={index}>
                  <FontAwesomeIcon icon={faExternalLink} style={{ marginRight: '8px', width: '16px' }} />
                  <a href={repoLink}>{displayText}</a>
                </li>
              ) : null;
            })}
          </ul>

          {siteLink && (
            <span className="text-[#E25A27] underline">
                <FontAwesomeIcon icon={faExternalLink} style={{ marginRight: '8px', width: '16px' }} />
                <a href={siteLink}>Ver demo</a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
