import express from 'express';
import { createPost, deletePost, getAllPosts, getPostById, updatePost } from '../controllers/post.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get("/", getAllPosts)
router.get("/:id", getPostById)
router.post("/",verifyToken, createPost)
router.put("/:id",verifyToken, updatePost)
router.delete("/:id",verifyToken, deletePost)

export default router;