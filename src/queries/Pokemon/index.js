import { GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';
import { PokeType } from '../../types/pokemon';
import { PokeDetailType } from '../../types/pokemonDetail';
import { getPokemon, getDetailPokemon } from '../../models/pokemon';

const GetPokemon = {
  type: PokeType,
  args: {
    limit: { type: GraphQLInt, defaultValue: 20 },
    offset: { type: GraphQLInt, defaultValue: 0 },
  },
  resolve: getPokemon
}

const GetDetailPokemon = {
  type: PokeDetailType,
  args: {
    id: { type: GraphQLInt, defaultValue: null },
    name: { type: GraphQLString, defaultValue: null },
  },
  resolve: getDetailPokemon
}

export { GetPokemon, GetDetailPokemon }