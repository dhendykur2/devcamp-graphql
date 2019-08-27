import {
  GraphQLObjectType,
  GraphQLList
} from 'graphql';
import { PokeDetailType } from './pokemonDetail';

const PokeType = new GraphQLObjectType({
  name: 'PokeType',
  fields: {
    pokemons: { type: new GraphQLList(PokeDetailType) },
  }
})

export { PokeType }
