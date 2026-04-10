# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListAllGames*](#listallgames)
  - [*GetUserById*](#getuserbyid)
- [**Mutations**](#mutations)
  - [*CreateNewAvatarItem*](#createnewavataritem)
  - [*JoinTournament*](#jointournament)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListAllGames
You can execute the `ListAllGames` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAllGames(options?: ExecuteQueryOptions): QueryPromise<ListAllGamesData, undefined>;

interface ListAllGamesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllGamesData, undefined>;
}
export const listAllGamesRef: ListAllGamesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAllGames(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAllGamesData, undefined>;

interface ListAllGamesRef {
  ...
  (dc: DataConnect): QueryRef<ListAllGamesData, undefined>;
}
export const listAllGamesRef: ListAllGamesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAllGamesRef:
```typescript
const name = listAllGamesRef.operationName;
console.log(name);
```

### Variables
The `ListAllGames` query has no variables.
### Return Type
Recall that executing the `ListAllGames` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAllGamesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListAllGames`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAllGames } from '@dataconnect/generated';


// Call the `listAllGames()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAllGames();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAllGames(dataConnect);

console.log(data.games);

// Or, you can use the `Promise` API.
listAllGames().then((response) => {
  const data = response.data;
  console.log(data.games);
});
```

### Using `ListAllGames`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAllGamesRef } from '@dataconnect/generated';


// Call the `listAllGamesRef()` function to get a reference to the query.
const ref = listAllGamesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAllGamesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.games);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.games);
});
```

## GetUserById
You can execute the `GetUserById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserById(vars: GetUserByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserByIdData, GetUserByIdVariables>;

interface GetUserByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;
}
export const getUserByIdRef: GetUserByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserById(dc: DataConnect, vars: GetUserByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserByIdData, GetUserByIdVariables>;

interface GetUserByIdRef {
  ...
  (dc: DataConnect, vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;
}
export const getUserByIdRef: GetUserByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserByIdRef:
```typescript
const name = getUserByIdRef.operationName;
console.log(name);
```

### Variables
The `GetUserById` query requires an argument of type `GetUserByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetUserById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserByIdData {
  user?: {
    id: UUIDString;
    username: string;
    avatarUrl?: string | null;
    virtualCurrency: number;
  } & User_Key;
}
```
### Using `GetUserById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserById, GetUserByIdVariables } from '@dataconnect/generated';

// The `GetUserById` query requires an argument of type `GetUserByIdVariables`:
const getUserByIdVars: GetUserByIdVariables = {
  id: ..., 
};

// Call the `getUserById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserById(getUserByIdVars);
// Variables can be defined inline as well.
const { data } = await getUserById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserById(dataConnect, getUserByIdVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUserById(getUserByIdVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUserById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserByIdRef, GetUserByIdVariables } from '@dataconnect/generated';

// The `GetUserById` query requires an argument of type `GetUserByIdVariables`:
const getUserByIdVars: GetUserByIdVariables = {
  id: ..., 
};

// Call the `getUserByIdRef()` function to get a reference to the query.
const ref = getUserByIdRef(getUserByIdVars);
// Variables can be defined inline as well.
const ref = getUserByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserByIdRef(dataConnect, getUserByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewAvatarItem
You can execute the `CreateNewAvatarItem` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewAvatarItem(vars: CreateNewAvatarItemVariables): MutationPromise<CreateNewAvatarItemData, CreateNewAvatarItemVariables>;

interface CreateNewAvatarItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewAvatarItemVariables): MutationRef<CreateNewAvatarItemData, CreateNewAvatarItemVariables>;
}
export const createNewAvatarItemRef: CreateNewAvatarItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewAvatarItem(dc: DataConnect, vars: CreateNewAvatarItemVariables): MutationPromise<CreateNewAvatarItemData, CreateNewAvatarItemVariables>;

interface CreateNewAvatarItemRef {
  ...
  (dc: DataConnect, vars: CreateNewAvatarItemVariables): MutationRef<CreateNewAvatarItemData, CreateNewAvatarItemVariables>;
}
export const createNewAvatarItemRef: CreateNewAvatarItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewAvatarItemRef:
```typescript
const name = createNewAvatarItemRef.operationName;
console.log(name);
```

### Variables
The `CreateNewAvatarItem` mutation requires an argument of type `CreateNewAvatarItemVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewAvatarItemVariables {
  name: string;
  category: string;
  price: number;
  imageUrl?: string | null;
  rarity?: string | null;
}
```
### Return Type
Recall that executing the `CreateNewAvatarItem` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewAvatarItemData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewAvatarItemData {
  avatarItem_insert: AvatarItem_Key;
}
```
### Using `CreateNewAvatarItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewAvatarItem, CreateNewAvatarItemVariables } from '@dataconnect/generated';

// The `CreateNewAvatarItem` mutation requires an argument of type `CreateNewAvatarItemVariables`:
const createNewAvatarItemVars: CreateNewAvatarItemVariables = {
  name: ..., 
  category: ..., 
  price: ..., 
  imageUrl: ..., // optional
  rarity: ..., // optional
};

// Call the `createNewAvatarItem()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewAvatarItem(createNewAvatarItemVars);
// Variables can be defined inline as well.
const { data } = await createNewAvatarItem({ name: ..., category: ..., price: ..., imageUrl: ..., rarity: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewAvatarItem(dataConnect, createNewAvatarItemVars);

console.log(data.avatarItem_insert);

// Or, you can use the `Promise` API.
createNewAvatarItem(createNewAvatarItemVars).then((response) => {
  const data = response.data;
  console.log(data.avatarItem_insert);
});
```

### Using `CreateNewAvatarItem`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewAvatarItemRef, CreateNewAvatarItemVariables } from '@dataconnect/generated';

// The `CreateNewAvatarItem` mutation requires an argument of type `CreateNewAvatarItemVariables`:
const createNewAvatarItemVars: CreateNewAvatarItemVariables = {
  name: ..., 
  category: ..., 
  price: ..., 
  imageUrl: ..., // optional
  rarity: ..., // optional
};

// Call the `createNewAvatarItemRef()` function to get a reference to the mutation.
const ref = createNewAvatarItemRef(createNewAvatarItemVars);
// Variables can be defined inline as well.
const ref = createNewAvatarItemRef({ name: ..., category: ..., price: ..., imageUrl: ..., rarity: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewAvatarItemRef(dataConnect, createNewAvatarItemVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.avatarItem_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.avatarItem_insert);
});
```

## JoinTournament
You can execute the `JoinTournament` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
joinTournament(vars: JoinTournamentVariables): MutationPromise<JoinTournamentData, JoinTournamentVariables>;

interface JoinTournamentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: JoinTournamentVariables): MutationRef<JoinTournamentData, JoinTournamentVariables>;
}
export const joinTournamentRef: JoinTournamentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
joinTournament(dc: DataConnect, vars: JoinTournamentVariables): MutationPromise<JoinTournamentData, JoinTournamentVariables>;

interface JoinTournamentRef {
  ...
  (dc: DataConnect, vars: JoinTournamentVariables): MutationRef<JoinTournamentData, JoinTournamentVariables>;
}
export const joinTournamentRef: JoinTournamentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the joinTournamentRef:
```typescript
const name = joinTournamentRef.operationName;
console.log(name);
```

### Variables
The `JoinTournament` mutation requires an argument of type `JoinTournamentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface JoinTournamentVariables {
  tournamentId: UUIDString;
}
```
### Return Type
Recall that executing the `JoinTournament` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `JoinTournamentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface JoinTournamentData {
  userTournamentEntry_insert: UserTournamentEntry_Key;
}
```
### Using `JoinTournament`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, joinTournament, JoinTournamentVariables } from '@dataconnect/generated';

// The `JoinTournament` mutation requires an argument of type `JoinTournamentVariables`:
const joinTournamentVars: JoinTournamentVariables = {
  tournamentId: ..., 
};

// Call the `joinTournament()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await joinTournament(joinTournamentVars);
// Variables can be defined inline as well.
const { data } = await joinTournament({ tournamentId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await joinTournament(dataConnect, joinTournamentVars);

console.log(data.userTournamentEntry_insert);

// Or, you can use the `Promise` API.
joinTournament(joinTournamentVars).then((response) => {
  const data = response.data;
  console.log(data.userTournamentEntry_insert);
});
```

### Using `JoinTournament`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, joinTournamentRef, JoinTournamentVariables } from '@dataconnect/generated';

// The `JoinTournament` mutation requires an argument of type `JoinTournamentVariables`:
const joinTournamentVars: JoinTournamentVariables = {
  tournamentId: ..., 
};

// Call the `joinTournamentRef()` function to get a reference to the mutation.
const ref = joinTournamentRef(joinTournamentVars);
// Variables can be defined inline as well.
const ref = joinTournamentRef({ tournamentId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = joinTournamentRef(dataConnect, joinTournamentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userTournamentEntry_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userTournamentEntry_insert);
});
```

