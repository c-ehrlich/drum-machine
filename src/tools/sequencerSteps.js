const NUM_STEPS = 16;
let sequencerSteps = []

Array.from({length: NUM_STEPS}, () => {
  sequencerSteps.push(false);
})

export default sequencerSteps;
