import db from "../database/database.js"
import { CreateSessionId } from "../services/sessions.services.js";

export const GetAllUser = (req, res) => {
    
    const users = db.prepare("SELECT id, username, email FROM users").all();

    if(!users) {
        return res.status(400).json({message: "users not found or there will be problem on the server"})
    }

    return res.status(200).json({message: "users was found", users})
}

export const GetMe = (req, res) => {
    const sessionId = req.cookies.sessionId

    if(!sessionId) return res.status(401).json({message: "invalid sessionId"})

    
    // fins which user own this sessionid
    const session = db.prepare("SELECT user_id FROM sessions WHERE session_id = ?").get(sessionId)
    if(!session) {
        return res.status(401).json({message: "invalid sessionId"})
    }

    const user = db.prepare("SELECT id, username, email FROM users WHERE id = ? ").get(session.user_id)

    if(!user) {
        return res.status(401).json({message: "user not found"})
    }

    return res.status(200).json({message: "user found", user})
}