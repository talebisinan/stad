/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlayerInput = {
  name?: string | null,
  surname?: string | null,
  description?: string | null,
  position?: Array< string | null > | null,
  nation?: string | null,
  price?: number | null,
  available?: boolean | null,
  injured?: boolean | null,
  statistics?: string | null,
};

export type Player = {
  __typename: "Player",
  id?: string,
  name?: string | null,
  surname?: string | null,
  description?: string | null,
  position?: Array< string | null > | null,
  nation?: string | null,
  price?: number | null,
  available?: boolean | null,
  injured?: boolean | null,
  statistics?: string | null,
};

export type UpdatePlayerInput = {
  id: string,
  name?: string | null,
  surname?: string | null,
  description?: string | null,
  position?: Array< string | null > | null,
  nation?: string | null,
  price?: number | null,
  available?: boolean | null,
  injured?: boolean | null,
  statistics?: string | null,
};

export type DeletePlayerInput = {
  id: string,
};

export type TablePlayerFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  surname?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  position?: TableStringFilterInput | null,
  nation?: TableStringFilterInput | null,
  price?: TableFloatFilterInput | null,
  available?: TableBooleanFilterInput | null,
  injured?: TableBooleanFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type PlayerConnection = {
  __typename: "PlayerConnection",
  items?:  Array<Player | null > | null,
  nextToken?: string | null,
};

export type CreatePlayerMutationVariables = {
  input?: CreatePlayerInput,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    surname?: string | null,
    description?: string | null,
    position?: Array< string | null > | null,
    nation?: string | null,
    price?: number | null,
    available?: boolean | null,
    injured?: boolean | null,
    statistics?: string | null,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input?: UpdatePlayerInput,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    surname?: string | null,
    description?: string | null,
    position?: Array< string | null > | null,
    nation?: string | null,
    price?: number | null,
    available?: boolean | null,
    injured?: boolean | null,
    statistics?: string | null,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input?: DeletePlayerInput,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    surname?: string | null,
    description?: string | null,
    position?: Array< string | null > | null,
    nation?: string | null,
    price?: number | null,
    available?: boolean | null,
    injured?: boolean | null,
    statistics?: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id?: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    surname?: string | null,
    description?: string | null,
    position?: Array< string | null > | null,
    nation?: string | null,
    price?: number | null,
    available?: boolean | null,
    injured?: boolean | null,
    statistics?: string | null,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: TablePlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "PlayerConnection",
    items?:  Array< {
      __typename: "Player",
      id: string,
      name?: string | null,
      surname?: string | null,
      description?: string | null,
      position?: Array< string | null > | null,
      nation?: string | null,
      price?: number | null,
      available?: boolean | null,
      injured?: boolean | null,
      statistics?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlayerSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  surname?: string | null,
  description?: string | null,
  position?: Array< string | null > | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    surname?: string | null,
    description?: string | null,
    position?: Array< string | null > | null,
    nation?: string | null,
    price?: number | null,
    available?: boolean | null,
    injured?: boolean | null,
    statistics?: string | null,
  } | null,
};

export type OnUpdatePlayerSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  surname?: string | null,
  description?: string | null,
  position?: Array< string | null > | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    surname?: string | null,
    description?: string | null,
    position?: Array< string | null > | null,
    nation?: string | null,
    price?: number | null,
    available?: boolean | null,
    injured?: boolean | null,
    statistics?: string | null,
  } | null,
};

export type OnDeletePlayerSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  surname?: string | null,
  description?: string | null,
  position?: Array< string | null > | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    surname?: string | null,
    description?: string | null,
    position?: Array< string | null > | null,
    nation?: string | null,
    price?: number | null,
    available?: boolean | null,
    injured?: boolean | null,
    statistics?: string | null,
  } | null,
};
