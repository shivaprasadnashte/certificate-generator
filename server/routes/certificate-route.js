import { Router } from "express";
import { generateCertificate } from "../controllers/certificate-controller.js";

const certificateRouter = Router();

certificateRouter.post("/certificate", generateCertificate);

export default certificateRouter;
