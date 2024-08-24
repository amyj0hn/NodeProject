import express from "express";
import bodyParser from "body-parser";
import { products } from "../model/index.js";
// import { verifyAToken } from "../middleware/Authenticate.js";


const productRouter =  express.Router()
productRouter.use(bodyParser.json())

// All products
productRouter.get('/', (req,res)=>{
    products.fetchProducts(req,res)
})

// Recent products
productRouter.get('/recent', (req,res)=>{
    products.fetchRecentProducts(req,res)
})

// Single product
productRouter.get('/:id', (req,res)=>{
    products.fetchAProduct(req,res)
})

// Add/ Create product
productRouter.post('/add', (req,res)=>{
    products.addAProduct(req,res)
})

// Edit/ Update product
productRouter.patch('/:id', (req,res)=>{
    products.updateAProduct(req,res)
})

// Delete product
productRouter.delete('/:id',(req,res)=>{
    products.deleteAProduct(req,res)
})

export{
    productRouter
}