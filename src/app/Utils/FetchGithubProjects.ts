import { RepositoryInfo } from "../../../types/RepositoryInfo";

const projectIds = [
  {
    name: "frostgrave-warband-manager", 
  },
  {
    name: "Planned-Planthood",
  },
  {
    name: "RestaurantAPI",
  },
];

export async function fetchSpecificRepos(): Promise<RepositoryInfo[]> {
  const fetchPromises = projectIds.map((i) =>
    fetch(`https://api.github.com/repos/seanie1995/${i.name}`).then((res) => {
      if (!res.ok) throw new Error("Failed to fetch repos");
      return res.json();
    }),
  );

  try {
    const repos = await Promise.all(fetchPromises);
    return repos;
  } catch (error) {
    console.error(error);
    return [];
  }
}
