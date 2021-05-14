/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer(
    $id: ID
    $name: String
    $surname: String
    $description: String
    $position: [String]
  ) {
    onCreatePlayer(
      id: $id
      name: $name
      surname: $surname
      description: $description
      position: $position
    ) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer(
    $id: ID
    $name: String
    $surname: String
    $description: String
    $position: [String]
  ) {
    onUpdatePlayer(
      id: $id
      name: $name
      surname: $surname
      description: $description
      position: $position
    ) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer(
    $id: ID
    $name: String
    $surname: String
    $description: String
    $position: [String]
  ) {
    onDeletePlayer(
      id: $id
      name: $name
      surname: $surname
      description: $description
      position: $position
    ) {
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
