import {body} from 'express-validator'

export const auth_validator = [
    body('email', "Email not valid").isEmail(),
    body('password').isLength({min: 8}).withMessage("Password not valid"),
]

export const register_validator = [
    body('email', "Invalid email address").isEmail(),
    body('username', "Name is required").not().isEmpty(),
    body('username', "Name should contain at least 3 chars and be alphanumeric").isLength({min: 3}).isAlphanumeric(),
    body('password', "Password should be 8 chars at least").isLength({min: 8}),
    body('avatarUrl').optional().isURL()
]
