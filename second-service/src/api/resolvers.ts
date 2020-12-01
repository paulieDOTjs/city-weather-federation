import axios from "axios";
import dotenv from "dotenv";

import { cityRoot, weatherArgs } from "./schema";

dotenv.config();

export const resolvers = {
  Query: {
    weather: async (_root: any, args: any) => {
      const args1 = args as weatherArgs;
      try {
        return await getWeather(args1.city);
      } catch {
        throw Error("That is not a city");
      }
    },
  },

  City: {
    weather: async (root: any) => {
      const root1 = root as cityRoot;
      try {
        return await getWeather(root1.name);
      } catch {
        throw Error("That is not a city");
      }
    },
  },
};

const getWeather = async (city: string) => {
  try {
    const axiosCall = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
    );
    const weatherObj = {
      description: axiosCall.data.weather[0].description,
      temperature: kToF(axiosCall.data.main.temp),
      low: kToF(axiosCall.data.main.temp_min),
      high: kToF(axiosCall.data.main.temp_max),
      humidity: axiosCall.data.main.humidity,
    };
    return weatherObj;
  } catch (error) {
    throw error;
  }
};

const getWeatherMock = (city: string) => {
  console.log(city);
  return {
    description: "overcast clouds",
    high: kToF("272.04"),
    low: kToF("270.15"),
    temperature: kToF("270.96"),
    humidity: "63",
  };
};

const kToF = (num: string) => {
  try {
    return Math.round((parseInt(num) - 273.15) * 1.8 + 32);
  } catch {
    return num;
  }
};
