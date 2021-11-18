// @flow

const globalConfig = require('../config');

/**
 * Entity creation checklist:
 *  - add the entity here keyed by type (in render order)
 *  - add the entities/entityType file to this directory
 *  - add the entities options and arguments to ui/LevelEditor
 *  - if the entity has any special properties, add them to properties/
 *  - if it blocks pheromones, add to the config
 */


const Entities = {
  BACKGROUND: require('./background.js'),
  DOODAD: require('./doodad.js'),

  DIRT: require('./dirt.js'),
  STONE: require('./stone.js'),
  COAL: require('./coal.js'),
  IRON: require('./iron.js'),
  STEEL: require('./steel.js'),
  GLASS: require('./glass.js'),
  SILICON: require('./silicon.js'),
  SULPHUR: require('./sulphur.js'),
  ICE: require('./ice.js'),
  URANIUM: require('./uranium.js'),

  FOOD: require('./food.js'),
  AGENT: require('./agent.js'),
  TOKEN: require('./token.js'),

  BASIC_TURRET: require('./basicTurret.js'),
  FAST_TURRET: require('./turret.js'),

  DYNAMITE: require('./dynamite.js'),
  NUKE: require('./nuke.js'),
  MISSILE: require('./missile.js'),
  BULLET: require('./bullet.js'),

  BASE: require('./base.js'),
};

module.exports = {
  Entities,
};

