import express from "express";

import country from "./country";
import signIn from "./signIn";

const apiRoutes = express.Router();

apiRoutes.use("/country", country);
apiRoutes.use("/user", signIn);

export default apiRoutes;
