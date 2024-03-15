import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

export default router;

// Customer ----------------------------------------------------
router.post("/create", (req, res) => {
    let token = jwt.sign(req.body, `${process.env.PRIVATE_TOKEN}`, {
        expiresIn: "1h",
    });

    res.cookie("token", token, {
        maxAge: 3600000,
        httpOnly: true,
    });

    res.json({ message: req.body });
});
