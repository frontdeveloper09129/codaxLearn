import db from "../database/database.js";
export const Verify_sessionId = (req, res, next) => {
    const sessionId = req.cookies.sessionId;

    if (!sessionId) {
        return res.status(401).json({ message: "session not found"})
    }
    const session = db.prepare("SELECT user_id FROM sessions WHERE session_id = ?").get(sessionId);

    if (!session) {
        res.clearCookie("sessionId", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/"
        })
        return res.status(401).json({ message: "Session is not valid or expired", loggedin: false })
    }

    req.sessionId = sessionId
    req.userId = session.user_id

    return next()

}
