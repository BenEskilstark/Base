// @flow

const {Entities} = require('../entities/registry');

/**
 * Property creation checklist:
 *  - add the property here keyed by type
 *  - add the update function to the tickReducer
 */

const Properties = {
  // entities with actions queued right now
  ACTOR: true,

  // entities that emit a pheromone
  PHEROMONE_EMITTER: true,

  // entities that track a target to aim at
  TOWER: true,

  // entities that follow a ballistic trajectory
  BALLISTIC: true,

  // entities that can catch on fire and burn
  FLAMMABLE: true,

  // entities that can melt into a pheromone fluid
  MELTABLE: true,

  // entities that explode when they die
  EXPLOSIVE: true,

  // entities that produce power
  GENERATOR: true,

  // entities that consume power
  POWER_CONSUMER: true,

  // entities that don't animate every tick
  NOT_ANIMATED: true,

  // entities that use the tiled spritesheets
  TILED: true,

  // entities that are collectable
  COLLECTABE: true,
};

module.exports = {
  Properties,
};
