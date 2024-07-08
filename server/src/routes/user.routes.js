import { Router } from "express";
import { getUserDetails, logout, userLogin, userSignup } from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = new Router()

router.post("/login" , userLogin);
router.post("/signup" , userSignup);
router.post("/logout", verifyToken , logout);
router.get("/user-info", verifyToken , getUserDetails);

export default router

