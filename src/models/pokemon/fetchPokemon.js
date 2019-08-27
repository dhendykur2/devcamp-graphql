const axios = require('axios');

const main = async (_, args) => {
  const { limit, offset } = args;
  const res = await axios.default.get(`https://pokeapi.co/api/v2/pokemon/`, {
    params: {
      offset,
      limit
    }
  });
  return {
    pokemons: res.data.results
  };
};

export default main;