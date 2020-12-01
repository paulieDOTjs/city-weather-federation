import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import dotenv from "dotenv";

import { typeDefs } from "./api/schema";
import { resolvers } from "./api/resolvers";

dotenv.config();

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

const port = process.env.PORT || 4002;

server.listen({ port }).then(() => {
  console.log(`🚀  Weather service is up and running!  🚀`);
});
