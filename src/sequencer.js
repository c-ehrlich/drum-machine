// import keys from "./tools/keys";

const sequencerInit = {
  Q: {
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: true,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  W: {
    1: true,
    2: false,
    3: false,
    4: true,
    5: false,
    6: true,
    7: false,
    8: false,
    9: false,
    10: false,
    11: true,
    12: false,
    13: true,
    14: false,
    15: false,
    16: false,
  },
  E: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  R: {
    1: false,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: true,
    9: false,
    10: true,
    11: false,
    12: false,
    13: false,
    14: false,
    15: true,
    16: false,
  },
  A: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: true,
    15: false,
    16: false,
  },
  S: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  D: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: true,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  F: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  Z: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  X: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  C: {
    1: false,
    2: false,
    3: false,
    4: true,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: true,
    13: false,
    14: false,
    15: false,
    16: false,
  },
  V: {
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  },
};


// this currently crashes the site
// figure out what's wrong
// until then, keep using the bad declarative version

// const keysForGenerateSequencerInit = keys;
// const generateSequencerInit = (
//   keys = keysForGenerateSequencerInit,
//   steps = 16
// ) => {
//   let sequencerInit = {};
//   for (let key of keys) {
//     sequencerInit[key] = {};
//     for (let step of steps) {
//       sequencerInit[key][step] = false;
//     }
//   }
//   console.log(sequencerInit);
//   return sequencerInit;
// };

export default sequencerInit;
// export default generateSequencerInit;
