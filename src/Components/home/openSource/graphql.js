import { gql } from "apollo-boost";
import { client } from "../../../Utils/apollo";
import { config } from "../../../config";

export const getProjects = async () => {
  const results = await client.query({
    query: gql`
    {
    user(login: "${config.githubUserName}") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  }
    `,
  });
  return results;
};
