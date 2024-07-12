import { config } from "dotenv";
import e from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import http from "http";


import { sequelize } from "./src/database.js";
import { apiRoute } from "./src/routes.js";
config();

const PORT = process.env.PORT || 2000;

const corsOption = {
  origin: "http://localhost:5000",
  optionsSuccessStatus: 200,
  credentials: true,
};

const app = e();

app.use(morgan("combined"));
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());


app.use("/api/", apiRoute)

app.use((req, res, next) => {
  res.status(404).send("404: Page Not Found");
});

sequelize.sync().then(() => {
  http
  .createServer(app)
  .listen(PORT, () => console.log("Server started at port:", PORT));
})

