const axios = require('axios');

const main = async (_, args) => {
  const { id, name } = args;
  
  const res = await axios.default.get(`https://pokeapi.co/api/v2/pokemon/${id ? id : name}`);
  return {
    name: res.data.name,
    base_experience: res.data.base_experience,
    height: res.data.height,
    weight: res.data.weight,
    id: res.data.id,
    url: res.data.url,
  };
};

export default main;