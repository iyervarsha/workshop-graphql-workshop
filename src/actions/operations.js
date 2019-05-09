import gql from 'graphql-tag';


export const AddStar = gql``;

export const RemoveStar = gql``;

export const GetRepos = gql``;
query listRepos($queryString:String!){
    search(query: $queryString, type: USER, first:1) {
      edges {
        node {
          ... on User {
            name
            repositories(first: 20) {
              edges {
                node {
                  name
                  id
                  viewerHasStarred
                  createdAt
                  description
                  url
                  defaultBranchRef {
                    target {
                      ... on Commit {
                        history(first:10) {
                          totalCount
                          edges {
                            node {
                              ... on Commit {
                                committedDate
                                message
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
