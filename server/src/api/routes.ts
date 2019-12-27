import express from "express";

import country from "./country";
import signIn from "./signIn";
import slotMachine from "./slotMachine";

const apiRoutes = express.Router();

apiRoutes.use("/country", country);
apiRoutes.use("/user", signIn);
apiRoutes.use("/slot", slotMachine);

export default apiRoutes;
