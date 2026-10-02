import crypto from "crypto";

export const CreateSessionId = (req, res) => {
    const sessionId  = crypto.randomBytes(32).toString("hex");

    return sessionId
}