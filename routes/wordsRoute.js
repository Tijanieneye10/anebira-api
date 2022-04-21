import express from "express";
import products from "../data/words.js"
import { createWord, searchWord  } from "../controllers/wordsController.js";

const router = express.Router()


router.route('/').get(searchWord).post(createWord);


export default router;

