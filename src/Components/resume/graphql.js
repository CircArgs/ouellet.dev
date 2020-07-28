import { gql } from "apollo-boost";
import { client } from "../../Utils/apollo";
import { config } from "../../config";

export const getResumeHtml = async () => {
  console.log(`
    {
        repository(owner: "${config.githubUserName}", name: "${config.resumeRepo}") {
            content:object(expression: "${config.resumeHtml}") {
                ... on Blob {
                    text
                }
            }
            
        }
    }
    `);
  const results = await client.query({
    query: gql`
    {
        repository(owner: "${config.githubUserName}", name: "${config.resumeRepo}") {
            content:object(expression: "${config.resumeHtml}") {
                ... on Blob {
                    text
                }
            }
            
        }
    }
    `,
  });
  return results;
};

export const getResumeCss = async () => {
  const results = await client.query({
    query: gql`
      {
          repository(owner: "${config.githubUserName}", name: "${config.resumeRepo}") {
              content:object(expression: "${config.resumeCss}") {
                  ... on Blob {
                      text
                  }
              }
              
          }
      }
      `,
  });
  return results;
};
