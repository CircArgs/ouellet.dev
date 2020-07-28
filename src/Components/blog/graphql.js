import { gql } from "apollo-boost";
import { client } from "../../Utils/apollo";
import { config } from "../../config";

export const getBlogs = async () => {
  const results = await client.query({
    query: gql`
    {
      repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
        issues(first: 100, states: OPEN, filterBy: { labels: "blog" }) {
          nodes {
            title
            body
            bodyHTML
            bodyText
            number
            labels(first: 100) {
              nodes {
                color
                name
                id
              }
            }
            author {
              url
              avatarUrl
              login
            }
            updatedAt
            id
          }
        }
      }
    }
    `,
  });
  return results;
};
