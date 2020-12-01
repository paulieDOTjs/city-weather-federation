import dotenv from "dotenv";
import { find } from "lodash";

import { cityArgs } from "./schema";
import { cities } from "./cities";

dotenv.config();

export const resolvers = {
  Query: {
    city: (_root: any, args: any) => {
      const args1 = args as cityArgs;
      return find(cities, (city) => city.id === args1.id);
    },
    cities: () => {
      return cities;
    },
  },
};
