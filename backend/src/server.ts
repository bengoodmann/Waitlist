import { config } from "dotenv";
import e from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import http from "http";

import { sequelize } from "./database";
import { apiRoute } from "./routes";
config();

const PORT = process.env.PORT || 3000;

const corsOption = {
  origin: "*",
  optionsSuccessStatus: 200,
  credentials: true,
};

const app = e();

app.use(morgan("combined"));
app.use(cors(corsOption));
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(helmet());
app.set("trust proxy", true);

app.use("/api/", apiRoute);

app.use((req, res, next) => {
  res.status(404).send("404: Page Not Found");
});

sequelize.sync().then(() => {
  http
    .createServer(app)
    .listen(PORT, () => console.log("Server started at port:", PORT));
});
