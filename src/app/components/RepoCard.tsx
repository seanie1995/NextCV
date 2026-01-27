import React from "react";
import { RepositoryInfo } from "../../../types/RepositoryInfo";

type RepoProp = {
  data: RepositoryInfo;
  url: string;
};

const RepoCard: React.FC<RepoProp> = ({ data }) => {
  return (
    <div>
      <header>
        <h2>{data.name}</h2>
      </header>
    </div>
  );
};

export default RepoCard;
