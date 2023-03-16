import express from 'express'
import {validationResult} from "express-validator";
import {auth_validator, register_validator} from "../validators/auth_validator.js";
import User from "../dao/schemas/user_schema.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();
const secret = process.env.secret || "secret123"

router.use(express.json())
router.get('/', handle_main)
router.post('/auth/login', auth_validator, handle_auth)
router.post('/auth/register', register_validator, handle_register)

//Handler functions
function handle_main(req, res) {
    res.send('hello world')
}

function handle_auth(req, res) {
    if (isRequestValid(req, res, "auth")) {
        const token = generate_token(req)
        res.json(
            {
                username: req.body.username,
                token: token
            }
        )
    }
}

async function handle_register(req, res) {
    if (isRequestValid(req, res, "register")) {
        try {
            const user = await register_user(req)
            res.json({user: user})
        } catch (e) {
            send_back_error(res, 500, e.toString())
        }
    }
}

//Utility functions
function generate_token(req) {
    const payload = {
        email: req.body.email,
        username: req.body.username
    }
    return jwt.sign(payload, secret)
}

async function register_user(req) {
    const salt = await bcrypt.genSalt(10)
    const password_hash = await bcrypt.hash(req.body.password, salt)

    const doc = new User({
        userId: "",
        username: req.body.username,
        email: req.body.email,
        password: password_hash,
        avatarUrl: req.body.avatarUrl
    })
    const result = await doc.save()

    return result
}

function isRequestValid(req, res, handler_name) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        send_back_error(res, get_error_code(handler_name), errors.array())
        return false
    } else {
        return true;
    }
}

function send_back_error(res, error_code, error_msg) {
    res.status(error_code).json({errors: error_msg});
}

function get_error_code(handler_name) {
    let error_code;
    switch (handler_name) {
        case "auth":
            error_code = 400;
            break;
        case "register":
            error_code = 422;
            break;
        default:
            error_code = 500;
    }
    return error_code
}

export default router