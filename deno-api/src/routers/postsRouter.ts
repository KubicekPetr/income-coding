import { Router } from "../../deps.ts";

import { getAll as getPosts } from "../controllers/postsController.ts";

const router = new Router();
router
    .get("/", getPosts)

export default router;