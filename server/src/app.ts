import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import apiRoutes from "./api/routes";
import errorHandle from "./errorHandle";

const app = express();
app.set("port", process.env.PORT || 3000);

mongoose.connect("mongodb://127.0.0.1:27017/Youbet", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api", apiRoutes);
app.use(errorHandle);

export default app;
