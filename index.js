import express from "express";
import { config } from "dotenv";
import jsonParser from "./middlewares/jsonParser.js";
import corsConfig from "./middlewares/cors.js";
import makeadreamAi from "./routes/makeadreamAi.js"

const app = express();
config();
const port = process.env.PORT || 5000;
app.use(corsConfig)
app.use(jsonParser)
app.get("/", (req, res) => {
    res.send({
        message: "Project Bluebell Server",
        health: "ok",
    });
});
app.use("/api/MakeadreamAI", makeadreamAi);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

