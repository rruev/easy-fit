import "dotenv/config";

import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";

import { authMiddleware } from "./middlewares/auth.middleware.js";

import router from "./routes.js";

const app = express();

app.use(express.json());

app.use(cors());
app.use(cookieParser());

app.use(authMiddleware);

app.use("/api/v1", router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});