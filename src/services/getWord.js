export const getWord = () => {
  return fetch("https://random-word-api.herokuapp.com/word?number=1");
};
