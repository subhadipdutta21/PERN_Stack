const express = require("express");
const cors = require("cors");
const todoRoute = require("./Routes/Todos");
const userRoute = require("./Routes/Users");
const redis = require("redis");
const { default: axios } = require("axios");
const app = express();
const { promisify } = require("util");

const redisClient = redis.createClient();
redisClient.on("error", (error) => {
  console.error(error);
});
redisClient.on("connect", () => {
  console.log("Redis client up n running !");
});

const GET_ASYNC = promisify(redisClient.get).bind(redisClient);
const SET_ASYNC = promisify(redisClient.set).bind(redisClient);

app.use(cors());
app.use(express.json());

app.get("/docker", (req, res) => res.send("Test docker app")); //just docker test
app.use("", userRoute);
app.use("/todos", todoRoute);

// redis usage
app.get("/rockets", async (req, res, next) => {
  try {
    const checkCachedData = await GET_ASYNC("rockets_cache_data");
    if (checkCachedData) {
      console.log("using cached data!");
      res.send(JSON.parse(checkCachedData));
      return;
    }
    let resp = await axios.get("https://api.spacexdata.com/v3/rockets");
    await SET_ASYNC("rockets_cache_data", JSON.stringify(resp.data), "EX", 5);
    console.log("cache empty, fetching fresh data...");
    res.send(resp.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(5000, () => console.log("server running on port 5000"));
