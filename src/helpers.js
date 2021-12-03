import soundBanks from "./sounds.json";

const getSoundBankFromTitle = (title) => {
  return soundBanks.soundBanks.filter(data => {
    return data.url === title
  })[0];
}

export default getSoundBankFromTitle;
