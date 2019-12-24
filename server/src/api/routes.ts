import express from "express";

import country from "./country";


const apiRoutes = express.Router();

apiRoutes.use("/country", country);


export default apiRoutes;
