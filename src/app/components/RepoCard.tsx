import React from "react";
import { CompleteRepoInfo } from "../../../types/RepositoryInfo";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type RepoProp = {
  data: CompleteRepoInfo;
};

const RepoCard: React.FC<RepoProp> = ({ data }) => {
  return (
    <article className="glass-card hover-lift group overflow-hidden">
      {data.url && data.imgUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imgUrl}
            alt={`${data.displayName} project thumbnail`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
            {data.displayName}
          </h3>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label={`View ${data.displayName} on GitHub`}
          >
            <FaGithub className="text-lg" />
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
        
        <p className="text-gray-400 leading-relaxed mb-4 line-clamp-3">
          {data.description || "A project showcasing modern web development practices."}
        </p>
        
        {data.topics && data.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {data.topics.slice(0, 4).map((topic) => (
              <span 
                key={topic}
                className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-white/10">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            {data.language || "Code"}
          </span>
          <span>{data.stargazers_count || 0} stars</span>
        </div>
      </div>
    </article>
  );
};

export default RepoCard;
