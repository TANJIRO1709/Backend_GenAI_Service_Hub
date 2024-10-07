import express from "express";
import cors from "cors"; // Import the CORS package
import { config } from "dotenv";
import jsonParser from "./middlewares/jsonParser.js";
import serviceHubAi from "./routes/serviceHubAi.js";

const app = express();
config();

// Configure CORS to allow all origins
const corsOptions = {
  origin: '*', // Allow all domains
  methods: 'GET,POST,OPTIONS', // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
};

app.use(cors(corsOptions)); // Use the CORS middleware with options

app.use(jsonParser);
app.get("/", (req, res) => {
    res.send({
        message: "Project Service_Hub Server",
        health: "ok",
    });
});

app.use("/api/ServiceHubAI", serviceHubAi);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
