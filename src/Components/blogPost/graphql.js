import { gql } from "apollo-boost";
import { client } from "../../Utils/apollo";
import { config } from "../../config";

export const getBlog = async (issueNumber) => {
  const results = await client.query({
    query: gql`{
        repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
          issue(number: ${issueNumber}) {
            title
            body
            bodyHTML
            url
            bodyText
            number
            bodyHTML
            author {
              url
              avatarUrl
              login
            }
            reactions(first:100){
              nodes{
                content
                user{
                  url
                  id
                  login
                }
              }
            }
            updatedAt
            createdAt
            id
            comments(first:100) {
              nodes {
                author {
                  ... on User {
                    avatarUrl
                    name
                    login
                  }
                }
                body
                bodyHTML
                bodyText
                publishedAt
                updatedAt
              }
            }
          }
        }
      }
      `,
  });

  return results;
};
