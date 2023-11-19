import * as categoryController from '../controllers/category-api-controller.js';
import * as itemController from '../controllers/item-api-controller.js';
import express from 'express';


const router = express.Router();


router.get('/allCategories', categoryController.getAllCategories)
router.get('/allItems', itemController.getAllItems)

export default router