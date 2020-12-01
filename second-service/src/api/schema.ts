import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    weather(city: String!): Weather
  }

  type Weather {
    description: String
    temperature: String
    low: String
    high: String
    humidity: String
  }

  extend type City @key(fields: "name") {
    name: String! @external
    weather: Weather
  }
`;

export interface cityRoot {
  name: string;
}

export interface weatherArgs {
  city: string;
}
