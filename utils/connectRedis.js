const redis = require("redis");
const dotenv = require("dotenv");

dotenv.config();

const client = redis.createClient({
    url: process.env.REDIS_URL,
});

client.on("error", (err) => console.error("Redis Client Error", err));

const connectRedis = async () => {
    try {
        await client.connect();
        console.log("Connected to Redis successfully!");
    } catch (error) {
        console.error("Failed to connect to Redis:", error.message);
    }
};

connectRedis();

module.exports = client;
