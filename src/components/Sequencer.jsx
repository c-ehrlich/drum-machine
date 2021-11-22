import React from "react";
import SequencerButton from "./SequencerButton";
import keys from "../tools/keys";

const Sequencer = () => {
  return (
    <div>
      {keys.map((button) => {
        return (
          <div>
            <div key={`sequencer-${button}`}>{button}</div>
            {[...Array(16).keys()].map((step) => {
              return (
                <SequencerButton
                  key={`sequencer-${button}-${step+1}`}
                  button={button}
                  // maybe find a function that can create a range between
                  // two arbitrary numbers instead of doing this awful hack?
                  step={step + 1}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sequencer;
