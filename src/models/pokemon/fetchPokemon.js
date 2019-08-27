const axios = require('axios');

const main = async (_, args) => {
  const { limit, offset } = args;
  const res = await axios.default.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}'`);
  const data = [];
  for (let i = 0; i< res.data.results.length; i++) {
    const res1 = await axios.default.get(`https://pokeapi.co/api/v2/pokemon/${res.data.results[i].name}`);
    data.push({ ...res1.data, url: res.data.results[i].url })
  }
  return {
    pokemons: data
  };
};

export default main;