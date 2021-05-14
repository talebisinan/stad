/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
      surname
      description
      position
      nation
      price
      available
      injured
      statistics
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: TablePlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        surname
        description
        position
        nation
        price
        available
        injured
        statistics
      }
      nextToken
    }
  }
`;
