import express from "express";
import { userSignup,userLogin } from "../controller/userController.js";
import { getProducts,getProductById } from "../controller/productController.js";


const router=express.Router()

  router.post('/signup',userSignup)//new user signup
  router.post('/login', userLogin)//user login
  router.get('/products',getProducts)//get all products
  router.get('/product/:id',getProductById)//get details of selected product

export default router       