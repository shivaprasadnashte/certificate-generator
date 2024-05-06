import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import certificateRouter from "./routes/certificate-route.js";
import { connect } from "./utils/db.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
connect();

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send("Hello, world!");
});

app.use("/api", certificateRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
