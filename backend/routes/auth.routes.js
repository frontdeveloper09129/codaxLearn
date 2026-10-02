import express from "express";
import { CheckCookies, Login, Logout, Register }from "../controllers/auth.controllers.js";
import { Verify_sessionId } from "../middleware/middleware.session_verification.js";

const router = express.Router();


router.post("/login", Login)
router.post('/logout',Verify_sessionId, Logout)
router.post("/register", Register)
router.get("/check-auth", Verify_sessionId, CheckCookies);


export default router
