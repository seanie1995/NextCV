import React from "react";
import { CompleteRepoInfo } from "../../../types/RepositoryInfo";
import Image from "next/image";

type RepoProp = {
  data: CompleteRepoInfo;
};

const RepoCard: React.FC<RepoProp> = ({ data }) => {
  const baseCard =
    "w-full p-6 bg-gray-900 text-white rounded-2xl shadow-lg border-l-4 border-purple-600 flex flex-col transition-transform hover:scale-105 min-h-[220px]";

  const baseHeading = "text-2xl font-semibold mb-3 border-b border-gray-700 pb-1";

  return (
    <div className={baseCard}>
     
      {data.url && (
        <div className="mb-4 flex-shrink-0 relative h-128 w-full">
          <Image
            src={data.url}
            alt={data.displayName}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      
      <header>
        <h2 className={baseHeading}>{data.displayName}</h2>
      </header>
      <p className="my-2 flex-grow">
        {data.description || "This is a placeholder description for the repository."}
      </p>
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 font-medium mt-auto"
      >
        View Repository
      </a>
    </div>
  );
};

export default RepoCard;
