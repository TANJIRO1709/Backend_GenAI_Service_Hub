import express from "express";
import { config } from "dotenv";
import jsonParser from "./middlewares/jsonParser.js";
import corsConfig from "./middlewares/cors.js"; // If you want to keep this, ensure it works as intended
import serviceHubAi from "./routes/serviceHubAi.js";

const app = express();
config();
const port = process.env.PORT || 5000;

// CORS middleware to handle cross-origin requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allows all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow specific HTTP methods
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers
  // If the browser sends an OPTIONS request before actual request (pre-flight), respond OK
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// Parse JSON
app.use(jsonParser);

// Base route
app.get("/", (req, res) => {
  res.send({
    message: "Project Service_Hub Server",
    health: "ok",
  });
});

// Route to ServiceHubAI
app.use("/api/ServiceHubAI", serviceHubAi);

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
