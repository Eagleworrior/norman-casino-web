# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { listAllGames, getUserById, createNewAvatarItem, joinTournament } from '@dataconnect/generated';


// Operation ListAllGames: 
const { data } = await ListAllGames(dataConnect);

// Operation GetUserById:  For variables, look at type GetUserByIdVars in ../index.d.ts
const { data } = await GetUserById(dataConnect, getUserByIdVars);

// Operation CreateNewAvatarItem:  For variables, look at type CreateNewAvatarItemVars in ../index.d.ts
const { data } = await CreateNewAvatarItem(dataConnect, createNewAvatarItemVars);

// Operation JoinTournament:  For variables, look at type JoinTournamentVars in ../index.d.ts
const { data } = await JoinTournament(dataConnect, joinTournamentVars);


```