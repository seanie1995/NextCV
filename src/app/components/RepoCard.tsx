import React from "react";
import { CompleteRepoInfo } from "../../../types/RepositoryInfo";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

type RepoProp = {
  data: CompleteRepoInfo;
};

const RepoCard: React.FC<RepoProp> = ({ data }) => {
  return (
    <article className="bg-[var(--card-bg)] rounded-lg overflow-hidden border border-[var(--card-border)] group transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:border-purple-500/50">
      {data.imgUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imgUrl}
            alt={`${data.displayName} project`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}
      
      <div className="p-5 relative">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
            {data.displayName}
          </h3>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:rotate-6"
            aria-label={`View ${data.displayName} on GitHub`}
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
          {data.description || "A project showcasing web development."}
        </p>
        
        {data.topics && data.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.topics.slice(0, 3).map((topic) => (
              <span 
                key={topic}
                className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded transition-all duration-300 hover:bg-purple-600/40 hover:scale-105 cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default RepoCard;
