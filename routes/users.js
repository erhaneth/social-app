import express from "express";
import { 
    getUser,
    getUserFrineds,
    addRemoveFriend
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Read 
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFrineds);

//UPDATE
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;