import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt,
} from 'graphql';

const PokeDetailType = new GraphQLObjectType({
  name: 'PokeDetailType',
  fields: {
    name: { type: GraphQLString },
    base_experience: { type: GraphQLString },
    height: { type: GraphQLInt },
    weight: { type: GraphQLInt },
    id: { type: GraphQLInt },
    url: { type: GraphQLString },
  }
})

export { PokeDetailType }
