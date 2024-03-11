import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

export default router;

// User ----------------------------------------------------
router.post("/create", (req, res) => {
    let token = jwt.sign(req.body, `${process.env.PRIVATE_TOKEN}`, {
        expiresIn: "10m",
    });

    res.cookie("token", token, {
        maxAge: 300000,
        httpOnly: true,
    });

    res.json({ message: req.body });
});
