import express from "express";
import bodyParser from "body-parser";
import { products } from "../model/index.js";
import { verifyAToken } from "../middleware/Authenticate.js";


const productRouter =  express.Router()
productRouter.use(bodyParser.json())

// All products
productRouter.get('/', (req,res)=>{
    products.FetchProducts(req,res)
})

// Recent products
productRouter.get('/recent', (req,res)=>{
    products.RecentProducts(req,res)
})

// Single product
productRouter.get('/:id', (req,res)=>{
    products.FetchProduct(req,res)
})

// Add/ Create product
productRouter.post('/add', (req,res)=>{
    products.AddProduct(req,res)
})

// Edit/ Update product
productRouter.patch('/:id', (req,res)=>{
    products.UpdateProduct(req,res)
})

// Delete product
productRouter.delete('/:id',(req,res)=>{
    products.DeleteProduct(req,res)
})

export{
    productRouter
}