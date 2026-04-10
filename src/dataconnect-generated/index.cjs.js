const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'norman-casino-web',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const listAllGamesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllGames');
}
listAllGamesRef.operationName = 'ListAllGames';
exports.listAllGamesRef = listAllGamesRef;

exports.listAllGames = function listAllGames(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listAllGamesRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getUserByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserById', inputVars);
}
getUserByIdRef.operationName = 'GetUserById';
exports.getUserByIdRef = getUserByIdRef;

exports.getUserById = function getUserById(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getUserByIdRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const createNewAvatarItemRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewAvatarItem', inputVars);
}
createNewAvatarItemRef.operationName = 'CreateNewAvatarItem';
exports.createNewAvatarItemRef = createNewAvatarItemRef;

exports.createNewAvatarItem = function createNewAvatarItem(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createNewAvatarItemRef(dcInstance, inputVars));
}
;

const joinTournamentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'JoinTournament', inputVars);
}
joinTournamentRef.operationName = 'JoinTournament';
exports.joinTournamentRef = joinTournamentRef;

exports.joinTournament = function joinTournament(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(joinTournamentRef(dcInstance, inputVars));
}
;
