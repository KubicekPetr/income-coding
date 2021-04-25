import { Router } from "../../deps.ts";

import { 
    getPosts,
    getPost,
    createPost,
    updatePost,
    removePost,
 } from "../controllers/postsController.ts";

const router = new Router();
router
    .get("/", getPosts)
    .get("/:id", getPost)
    .post("/", createPost)
    .put("/:id", updatePost)
    .delete("/:id", removePost)

export default router;