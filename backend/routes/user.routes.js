import express from "express";
import { GetAllUser, GetMe } from "../controllers/user.controllers.js";
import { Verify_sessionId } from "../middleware/middleware.session_verification.js";
const router = express.Router();

router.get("/getAllUsers", Verify_sessionId, GetAllUser)
router.get("/me", Verify_sessionId, GetMe)

export default router;
