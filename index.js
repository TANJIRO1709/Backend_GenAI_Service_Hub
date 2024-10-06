import express from "express";
import { config } from "dotenv";
import jsonParser from "./middlewares/jsonParser.js";
import serviceHubAi from "./routes/serviceHubAi.js";

// Import the cors package
const cors = require('cors');

const app = express();
config();

const port = process.env.PORT || 5000;

// CORS configuration - allowing requests from localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware to parse JSON
app.use(jsonParser);

// Root route
app.get("/", (req, res) => {
    res.send({
        message: "Project Service_Hub Server",
        health: "ok",
    });
});

// ServiceHubAI route
app.use("/api/ServiceHubAI", serviceHubAi);

// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
