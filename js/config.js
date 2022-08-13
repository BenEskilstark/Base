// @flow

const config = {
  msPerTick: 16,

  canvasWidth: 1000,
  canvasHeight: 800,

  viewWidth: 66,
  viewHeight: 72,
  useFullScreen: true,
  cellWidth: 20,
  cellHeight: 16,

  audioFiles: [
    {path: 'audio/Song Oct. 9.wav', type: 'wav'},
  ],

  imageFiles: {
    'URANIUM': './img/URANIUM.png',
    'DIRT': './img/DIRT.png',
    'IRON': './img/IRON.png',
    'STEEL': './img/STEEL.png',
    'COAL': './img/COAL.png',
    'HOT_COAL': './img/HOT_COAL.png',
    'STONE': './img/STONE.png',
    'SULPHUR': './img/SULPHUR.png',
    'ICE': './img/ICE.png',

    'MISSILE': './img/Missile2.png',
    'NUKE_MISSILE': './img/NukeMissile1.png',
    'BUNKER_BUSTER': './img/BunkerBuster1.png',
    'BASIC_TURRET': './img/Basic_turret1.png',
    'FAST_TURRET': './img/Fast_turret1.png',
    'LASER_TURRET': './img/Laser_turret.png',
    'BASE': './img/Base1.png',

    'PHEROMONE': './img/Pheromones.png',

    'ALERT': './img/Exclamation1.png',
    'WANDER': './img/Ellipsis1.png',
    'QUESTION': './img/Question1.png',
    'MALE': './img/Male1.png',
    'FEMALE': './img/Female1.png',

    'ANT': './img/Ant2.png',
    'WORM': './img/Worm1.png',

    'FLOOR_TILE': './img/FloorTile1.png',
    'SKYLINE': './img/Skyline1.png',
  },

  dispersingPheromoneUpdateRate: 6,
  gravity: -100,

  // all times in seconds
  difficulty: {
    EASY: {
      startTime: 10,
      startFrequency: 7,
      waves: [
        {start: 5 * 60, duration: 20, frequency: 1},
        {start: 10 * 60, duration: 20, frequency: 0.75},
      ],
      finalWaveDelay: 180, // time between each wave after all waves exhausted
      busterTime: 10 * 60,
      nukeTime: 12 * 60,
    },
    NORMAL: {
      startTime: 1 * 60,
      startFrequency: 6,
      waves: [
        {start: 5 * 60, duration: 15, frequency: 1},
        {start: 8 * 60, duration: 30, frequency: 0.75},
        {start: 11 * 60, duration: 15, frequency: 0.5},
        {start: 14 * 60, duration: 30, frequency: 0.5},
        {start: 18 * 60, duration: 30, frequency: 0.2},
        {start: 20 * 60, duration: 30, frequency: 0.2},
      ],
      finalWaveDelay: 120, // time between each wave after all waves exhausted
      busterTime: 10 * 60,
      nukeTime: 12 * 60,
    },
    HARD: {
      startTime: 1,
      startFrequency: 3,
      waves: [
        {start: 3 * 60, duration: 15, frequency: 1},
        {start: 5 * 60, duration: 30, frequency: 0.75},
        {start: 9 * 60, duration: 15, frequency: 0.5},
        {start: 11 * 60, duration: 30, frequency: 0.25},
        {start: 13 * 60, duration: 30, frequency: 0.1},
        {start: 15 * 60, duration: 30, frequency: 0.2},
      ],
      finalWaveDelay: 60, // time between each wave after all waves exhausted
      busterTime: 8 * 60 * 1000,
      nukeTime: 10 * 60 * 1000,
    },
  },

  proceduralFrequencies: {
    STONE: {numMin: 1, numMax: 2, sizeMin: 4, sizeMax: 12},
    IRON: {numMin: 7, numMax: 10, sizeMin: 5, sizeMax: 10},
    COAL: {numMin: 6, numMax: 10, sizeMin: 6, sizeMax: 10},
    WATER: {numMin: 2, numMax: 5, sizeMin: 7, sizeMax: 14},
    SAND: {numMin: 1, numMax: 3, sizeMin: 5, sizeMax: 8},
    OIL: {numMin: 2, numMax: 4, sizeMin: 6, sizeMax: 12},
    SULPHUR: {numMin: 0, numMax: 1, sizeMin: 3, sizeMax: 4},
    GLASS: {numMin: 0, numMax: 1, sizeMin: 3, sizeMax: 4},
    ICE: {numMin: 1, numMax: 2, sizeMin: 3, sizeMax: 5},
    URANIUM: {numMin: 1, numMax: 2, sizeMin: 3, sizeMax: 3},
  },

  descriptions: {
    // resources:
    DIRT: {
      description: 'low-hp blocks for sculpting the landscape',
    },
    STONE: {
      description: 'high-hp blocks',
    },
    COAL: {
      description: 'carbon-based building block, combusts in HEAT',
    },
    ['HOT COAL']: {
      description: 'flaming coal whose HEAT melts resources into their molten form',
    },
    IRON: {
      description: 'abundant resource that can be smelted into STEEL',
    },
    STEEL: {
      description: 'high-hp resource used for making buildings',
      howToMake: 'COAL + MOLTEN_IRON (place coal directly on molten iron OR place HOT_COAL ' +
        'directly underneath IRON )',
    },
    GLASS: {
      description: 'resource used in high-tech buildings',
      howToMake: 'cooled MOLTEN_SAND',
    },
    SILICON: {
      description: 'resource used in high-tech buildings',
      howToMake: 'COAL + MOLTEN_SAND (place coal directly on molten sand OR place HOT_COAL ' +
        'directly underneath GLASS )',
    },
    SULPHUR: {
      description: 'resource used in missiles',
      howToMake: 'frozen SULPHUR_DIOXIDE',
    },
    ICE: {
      description: 'frozen WATER that produces COLD in the area around it',
      howToMake: 'WATER + ICE',
    },
    URANIUM: {
      description: 'very rare resource that produces indefinite low HEAT',
    },

    // pheromones:
    SAND: {
      description: 'naturally-occurring FLUID particulate that melts into MOLTEN_SAND',
    },
    MOLTEN_SAND: {
      description: 'super-hot FLUID sand that cools to GLASS or combines with COAL to make SILICON',
      howToMake: 'HEAT + SAND',
    },
    MOLTEN_IRON: {
      description: 'super-hot FLUID IRON',
      howToMake: 'HEAT + IRON',
    },
    MOLTEN_STEEL: {
      description: 'super-hot FLUID STEEL',
      howToMake: 'HEAT + IRON + COAL',
    },
    WATER: {
      description: 'FLUID that heats to STEAM and freezes to ICE. Can pass through a TURBINE ' +
        'to produce POWER',
    },
    STEAM: {
      description: 'rising GAS that can pass through a TURBINE to produce POWER',
    },
    SULPHUR_DIOXIDE: {
      description: 'rising GAS that freezes into SULPHUR',
      howToMake: 'OIL + low HEAT',
    },
    OIL: {
      description: 'naturally-occurring FLUID that heats to SULPHUR_DIOXIDE and combusts to ' +
        'HOT_OIL',
    },
    HOT_OIL: {
      description: 'short-lived FLUID that briefly produces HEAT before burning off',
    },
    HEAT: {
      description: 'primary cause of phase changes in resources',
      howToMake: 'HOT_COAL or URANIUM or HOT_OIL',
    },
    COLD: {
      description: 'counteracts HEAT, needed to make ICE and SULPHUR',
      howToMake: 'ICE',
    },

    // buildings:
    BASIC_TURRET: {
      description: 'turret with poor aim and a low rate of fire that does not require POWER',
      howToMake: 'IRON',
    },
    FAST_TURRET: {
      description: 'turret with high fire rate that requires POWER',
      howToMake: 'STEEL',
    },
    MISSILE_TURRET: {
      description: 'turret that fires interceptor missiles which each cost some IRON COAL and ' +
        'SULPHUR to produce but does not require POWER',
      howToMake: 'IRON and STEEL',
    },
    LASER_TURRET: {
      description: 'turret with very high rate of fire with a high POWER requirement',
      howToMake: 'STEEL and GLASS and SILICON',
    },
    TURBINE: {
      description: 'building that produces POWER when a FLUID or GAS passes through it',
      howToMake: 'STEEL',
    },
    SOLAR_PANEL: {
      description: 'building that passively produces power based on how much sunlight it gets',
      howToMake: 'STEEL and GLASS and SILICON',
    },

    // misc:
    FLUID: {
      description: 'uncollectable resource type (like WATER or OIL ) that can pass through a TURBINE' +
        ' to produce POWER',
    },
    GAS: {
      description: 'uncollectable, rising resource that can pass through a TURBINE to produce POWER',
    },
    POWER: {
      description: 'energy produced by passing a FLUID or a GAS through a TURBINE to operate' +
        ' buildings',
    },


  },
};

const nonMoltenPheromoneBlockingTypes = [
  'DIRT',  'STONE', 'DOODAD', 'TURRET',
];
const pheromoneBlockingTypes = [
  ...nonMoltenPheromoneBlockingTypes,
  'ICE', 'SULPHUR',
  'STEEL', 'IRON', 'SILICON', 'GLASS',
];

const pheromones = {
  COLONY: {
    quantity: 350,
    decayAmount: 1,
    color: 'rgb(155, 227, 90)',
    tileIndex: 0,

    blockingTypes: [...pheromoneBlockingTypes, 'COAL'],
    blockingPheromones: [],
  },
  LIGHT: {
    quantity: 350,
    decayAmount: 1,
    color: 'rgb(155, 227, 90)',
    tileIndex: 0,

    blockingTypes: [...pheromoneBlockingTypes, 'COAL', 'TURBINE'],
    blockingPheromones: [],
  },
  WATER: {
    quantity: 120,
    decayAmount: 120,
    decayRate: 0.0005,
    color: 'rgb(100, 205, 226)',
    tileIndex: 1,

    blockingTypes: pheromoneBlockingTypes,
    blockingPheromones: [],
    isDispersing: true,
    heatPoint: 100,
    heatsTo: 'STEAM',
    heatRate: 0.016666666666666666,
    coolPoint: -100, // heat level to condense at
    coolsTo: 'ICE',
    coolsToEntity: true,
    coolRate: 1, // amount of yourself that condenses per step
    coolConcentration: 5, // amount of yourself needed before condensation starts
    viscosity: {
      verticalLeftOver: 0,
      diagonalLeftOver: 0.5,
      horizontalLeftOver: 0.8,
    },
    isFluid: true,
  },
  STEAM: {
    quantity: 120,
    decayAmount: 120,
    decayRate: 0.0005,
    color: 'rgb(255, 255, 255)',
    tileIndex: 4,

    blockingTypes: [...pheromoneBlockingTypes],
    blockingPheromones: [],
    isDispersing: true,
    coolPoint: 5, // heat level to condense at
    coolsTo: 'WATER',
    coolRate: 0.1, // amount of yourself that condenses per step
    coolConcentration: 60, // amount of yourself needed before condensation starts
    isFluid: true,
    viscosity: {
      verticalLeftOver: 0,
      diagonalLeftOver: 0.3,
      horizontalLeftOver: 0.66,
    },
    isRising: true,
  },
  OIL: {
    quantity: 120,
    decayAmount: 120,
    decayRate: 0.0005,
    color: 'rgb(0, 0, 0)',
    tileIndex: 4,

    blockingTypes: [...pheromoneBlockingTypes, 'COAL'],
    blockingPheromones: [],
    isDispersing: true,
    heatPoint: 10,
    heatsTo: 'SULPHUR_DIOXIDE',
    heatRate: 0.02,
    combustionPoint: 126,
    combustsTo: 'HOT_OIL',
    combustionRate: 1,
    viscosity: {
      verticalLeftOver: 0,
      diagonalLeftOver: 0.8,
      horizontalLeftOver: 0.9,
    },
    isFluid: true,
  },
  HOT_OIL: {
    quantity: 120,
    decayAmount: 120,
    decayRate: 1,
    color: 'rgb(150, 88, 101)',
    tileIndex: 4,

    blockingTypes: [...pheromoneBlockingTypes, 'COAL'],
    blockingPheromones: [],
    isDispersing: true,
    viscosity: {
      verticalLeftOver: 0,
      diagonalLeftOver: 0.5,
      horizontalLeftOver: 0.8,
    },
    isFluid: true,
  },
  SULPHUR_DIOXIDE: {
    quantity: 120,
    decayAmount: 120,
    decayRate: 0.0005,
    color: 'rgb(155, 227, 90)',
    tileIndex: 0,

    blockingTypes: [...pheromoneBlockingTypes],
    blockingPheromones: [],
    isDispersing: true,
    coolPoint: -5, // heat level to condense at
    coolsTo: 'SULPHUR',
    coolRate: 1, // amount of yourself that condenses per step
    coolConcentration: 80, // amount of yourself needed before condensation starts
    coolsToEntity: true,
    isFluid: true,
    viscosity: {
      verticalLeftOver: 0,
      diagonalLeftOver: 0.3,
      horizontalLeftOver: 0.66,
    },
    isRising: true,
  },
  SAND: {
    quantity: 120,
    decayAmount: 120,
    decayRate: 0.0005,
    color: 'rgb(250, 240, 70)',
    tileIndex: 3,

    blockingTypes: [...pheromoneBlockingTypes, 'COAL'],
    blockingPheromones: ['MOLTEN_SAND'],
    isDispersing: true,
    heatPoint: 100,
    heatsTo: 'MOLTEN_SAND',
    heatRate: 1,
    viscosity: {
      verticalLeftOver: 0,
      diagonalLeftOver: 0.5,
      horizontalLeftOver: 1,
    },
    isFluid: true,
  },
  MOLTEN_SAND: {
    quantity: 120,
    decayAmount: 120,
    decayRate: 0.0005,
    color: 'rgb(215, 88, 101)',
    tileIndex: 2,

    blockingTypes: [...pheromoneBlockingTypes],
    blockingPheromones: ['SAND', 'MOLTEN_IRON', 'MOLTEN_STEEL'],
    isDispersing: true,
    coolPoint: 5, // heat level to condense at
    coolsTo: 'GLASS',
    coolsToEntity: true,
    coolRate: 1, // amount of yourself that condenses per step
    coolConcentration: 9, // amount of yourself needed before condensation starts
    viscosity: {
      verticalLeftOver: 0,
      diagonalLeftOver: 0.5,
      horizontalLeftOver: 0.8,
    },
    isFluid: true,
  },
  MOLTEN_IRON: {
    quantity: 120,
    decayAmount: 120,
    decayRate: 0.0005,
    color: 'rgb(100, 100, 100)',
    tileIndex: 5,

    blockingTypes: [...pheromoneBlockingTypes],
    blockingPheromones: ['MOLTEN_STEEL', 'MOLTEN_SAND', 'SAND'],
    isDispersing: true,
    coolPoint: 80, // heat level to freeze at
    coolsTo: 'IRON',
    coolRate: 1,
    coolsToEntity: true,
    isFluid: true,
    viscosity: {
      verticalLeftOver: 0,
      diagonalLeftOver: 0,
      horizontalLeftOver: 1,
    },
    // NOTE: not using this
    combinesTo: [{
      substance: 'PHEROMONE',
      type: 'MOLTEN_STEEL',
      ingredients: [
        {substance: 'ENTITY', type: 'COAL'},
      ],
    }],
  },
  MOLTEN_STEEL: {
    quantity: 240,
    decayAmount: 240,
    decayRate: 0.0005,
    color: 'rgb(220, 220, 220)',
    tileIndex: 4,

    blockingTypes: [...pheromoneBlockingTypes],
    blockingPheromones: ['MOLTEN_IRON', 'MOLTEN_SAND', 'SAND'],
    isDispersing: true,
    coolPoint: 90, // heat level to freeze at
    coolsTo: 'STEEL',
    coolRate: 1,
    coolsToEntity: true,
    isFluid: true,
    viscosity: {
      verticalLeftOver: 0,
      diagonalLeftOver: 0,
      horizontalLeftOver: 1,
    },
  },
  HEAT: {
    quantity: 150,
    decayAmount: 15,
    decayRate: 1, // how much it decays per tick
    color: 'rgb(255, 0, 0)',
    tileIndex: 2,

    blockingTypes: [...nonMoltenPheromoneBlockingTypes],
    blockingPheromones: [],
    isDispersing: true,
  },
  COLD: {
    quantity: 120,
    decayAmount: 12,
    decayRate: 1, // how much it decays per tick
    color: 'rgb(100, 205, 226)',
    tileIndex: 1,

    blockingTypes: [...nonMoltenPheromoneBlockingTypes],
    blockingPheromones: [],
    isDispersing: true,
  },
};

module.exports = {config, pheromones};
