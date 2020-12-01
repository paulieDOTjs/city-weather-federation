import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    city(id: Int!): City
    cities: [City]
  }

  type City @key(fields: "name") @key(fields: "id") {
    name: String!
    id: Int!
    state: String
    population: Int
    nicknames: [String]
  }
`;

export interface cityArgs {
  id: number;
}
