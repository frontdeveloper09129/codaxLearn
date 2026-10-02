import db from "../database/database.js"
import bcrypt from "bcrypt"
import crypto from "crypto";
import { CreateSessionId } from "../services/sessions.services.js";


export const Login = async (req, res) => {
    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "Please provide a valid email address"
        });
    }
    // also we need to verify if the user account that on the fields is exist on our database
    const userAccount = db.prepare("SELECT * FROM users WHERE email = ?").get(email)

    if (!userAccount) return res.status(400).json({ message: "email is not exist" })

    const passWordCorrect = await bcrypt.compare(password, userAccount.password)

    if (!passWordCorrect) return res.status(400).json({ message: "password is not correct" })

    // if the password correct:
    // basically we need to create a cookie for every user?
    const sessionId = CreateSessionId()

    // connect the sessionid for the user 
    db.prepare("INSERT INTO sessions (session_id, user_id) VALUES (?, ?)").run(sessionId, userAccount.id);

    res.cookie("sessionId", sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000
    });


    const userData = {
        id: userAccount.id,
        username: userAccount.username,
        email: userAccount.email
    }
    return res.status(200).json({ message: "login succesfully"})
}

export const CheckCookies = (req, res) => {
    const userId = req.userId
    if (!userId) return res.status(401).json({ message: "Authentication required", loggedin: false });
    return res.status(200).json({message: "logged in", loggedin: true, userId});
}

export const Register = async (req, res) => {
    const {
        username,
        email,
        password,
        confirmPassword
    } = req.body;

    // Check required fields
    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Passwords do not match"
        });
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "Please provide a valid email address"
        });
    }

    // Check if email already exists
    const existingUser = db
        .prepare("SELECT id FROM users WHERE email = ?")
        .get(email);

    if (existingUser) {
        return res.status(409).json({
            message: "Email is already registered"
        });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const insertUser = db.prepare(`
        INSERT INTO users (username, email, password)
        VALUES (?, ?, ?)
    `).run(username, email, hashedPassword);

    return res.status(201).json({
        message: "Account created successfully"
    });
};

export const Logout = (req, res) => {
    const sessionId = req.sessionId 
    db.prepare(`DELETE FROM sessions WHERE session_id = ?`).run(sessionId);

    res.clearCookie("sessionId", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    })

    return res.status(200).json({ message: "logout succesfully" })
}


import express from "express";
const router = express.Router();
export default router;
