import cors from "cors";

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};

const corsConfig = cors(corsOptions);

export default corsConfig;