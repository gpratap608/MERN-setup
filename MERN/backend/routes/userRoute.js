import { getUsers , getUsersById  } from "../controllers/userController.js";
import  express  from "express";
const router = express()

router.route('/').get(getUsers)

router.route('/:id').get(getUsersById)

export default router