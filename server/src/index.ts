import errorHandler from "errorhandler";

import app from "./app";
import dotenv from "dotenv";

dotenv.config();

app.use(errorHandler());

const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

export default server;
