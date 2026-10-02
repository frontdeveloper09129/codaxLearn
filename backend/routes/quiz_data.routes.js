import express from "express";
import { GetQuiz_Question_data, GetQuizData_fullstackDeveloper, GetQuizData_softwareDeveloper, getScoreFullDev, getScoreSoftWareDev, getScoreSoftwareEng, GetuserScoreByid, resetUserScore, SubmitAnswer } from "../controllers/quiz_data.controllers.js";
import { Verify_sessionId } from "../middleware/middleware.session_verification.js";
const router = express.Router()

router.get("/getQuiz_question_data", Verify_sessionId, GetQuiz_Question_data);
router.get("/softwareDev_quiz_data", Verify_sessionId, GetQuizData_softwareDeveloper);
router.get("/fullstack_dev_data", Verify_sessionId, GetQuizData_fullstackDeveloper)
router.post("/submit_answer", Verify_sessionId, SubmitAnswer);
router.get("/softwareEngineer", Verify_sessionId, getScoreSoftwareEng);
router.get("/softwaredeveloper", Verify_sessionId, getScoreSoftWareDev);
router.get("/fullStack_dev_Score", Verify_sessionId, getScoreFullDev);
router.get("/userId/score", Verify_sessionId, GetuserScoreByid);
router.post("/user/reset_score", Verify_sessionId, resetUserScore);
// router.post("/submitAnswer", SubMitAnswer)
// router.post("/resetScore", resetquizAttempt)
// router.get("/user_data", GetUserData_quiz)
export default router
