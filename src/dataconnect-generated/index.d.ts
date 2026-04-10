import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AvatarItem_Key {
  id: UUIDString;
  __typename?: 'AvatarItem_Key';
}

export interface CreateNewAvatarItemData {
  avatarItem_insert: AvatarItem_Key;
}

export interface CreateNewAvatarItemVariables {
  name: string;
  category: string;
  price: number;
  imageUrl?: string | null;
  rarity?: string | null;
}

export interface Game_Key {
  id: UUIDString;
  __typename?: 'Game_Key';
}

export interface GetUserByIdData {
  user?: {
    id: UUIDString;
    username: string;
    avatarUrl?: string | null;
    virtualCurrency: number;
  } & User_Key;
}

export interface GetUserByIdVariables {
  id: UUIDString;
}

export interface JoinTournamentData {
  userTournamentEntry_insert: UserTournamentEntry_Key;
}

export interface JoinTournamentVariables {
  tournamentId: UUIDString;
}

export interface ListAllGamesData {
  games: ({
    id: UUIDString;
    name: string;
    minBet: number;
    maxBet: number;
    description?: string | null;
    thumbnailUrl?: string | null;
  } & Game_Key)[];
}

export interface Tournament_Key {
  id: UUIDString;
  __typename?: 'Tournament_Key';
}

export interface UserGameStats_Key {
  userId: UUIDString;
  gameId: UUIDString;
  __typename?: 'UserGameStats_Key';
}

export interface UserTournamentEntry_Key {
  userId: UUIDString;
  tournamentId: UUIDString;
  __typename?: 'UserTournamentEntry_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface ListAllGamesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllGamesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllGamesData, undefined>;
  operationName: string;
}
export const listAllGamesRef: ListAllGamesRef;

export function listAllGames(options?: ExecuteQueryOptions): QueryPromise<ListAllGamesData, undefined>;
export function listAllGames(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAllGamesData, undefined>;

interface GetUserByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;
  operationName: string;
}
export const getUserByIdRef: GetUserByIdRef;

export function getUserById(vars: GetUserByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserByIdData, GetUserByIdVariables>;
export function getUserById(dc: DataConnect, vars: GetUserByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserByIdData, GetUserByIdVariables>;

interface CreateNewAvatarItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewAvatarItemVariables): MutationRef<CreateNewAvatarItemData, CreateNewAvatarItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewAvatarItemVariables): MutationRef<CreateNewAvatarItemData, CreateNewAvatarItemVariables>;
  operationName: string;
}
export const createNewAvatarItemRef: CreateNewAvatarItemRef;

export function createNewAvatarItem(vars: CreateNewAvatarItemVariables): MutationPromise<CreateNewAvatarItemData, CreateNewAvatarItemVariables>;
export function createNewAvatarItem(dc: DataConnect, vars: CreateNewAvatarItemVariables): MutationPromise<CreateNewAvatarItemData, CreateNewAvatarItemVariables>;

interface JoinTournamentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: JoinTournamentVariables): MutationRef<JoinTournamentData, JoinTournamentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: JoinTournamentVariables): MutationRef<JoinTournamentData, JoinTournamentVariables>;
  operationName: string;
}
export const joinTournamentRef: JoinTournamentRef;

export function joinTournament(vars: JoinTournamentVariables): MutationPromise<JoinTournamentData, JoinTournamentVariables>;
export function joinTournament(dc: DataConnect, vars: JoinTournamentVariables): MutationPromise<JoinTournamentData, JoinTournamentVariables>;

