import React from "react";
import { CompleteRepoInfo } from "../../../types/RepositoryInfo";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

type RepoProp = {
  data: CompleteRepoInfo;
};

const RepoCard: React.FC<RepoProp> = ({ data }) => {
  return (
    <article className="bg-[var(--card-bg)] rounded-lg overflow-hidden border border-[var(--card-border)]">
      {data.imgUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={data.imgUrl}
            alt={`${data.displayName} project`}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-white">
            {data.displayName}
          </h3>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
            aria-label={`View ${data.displayName} on GitHub`}
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {data.description || "A project showcasing web development."}
        </p>
        
        {data.topics && data.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.topics.slice(0, 3).map((topic) => (
              <span 
                key={topic}
                className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded"
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
