import { connection as db } from "../config/index.js";
import { hash } from "bcrypt";

class Products{
    getProducts(req, res){
            try {
              const strQry = `
                  SELECT 
                  prodID, 
                  prodName, 
                  quantity, 
                  amount, 
                  Category, 
                  prodUrl
                  FROM Products;
                  `
              db.query(strQry, (err, results) => {
                if(err) throw new Error("Issue occurred while retrieving all products.");
                res.json({
                  status: res.statusCode,
                  results,
                });
              });
            } catch (e) {
              res.json({
                status: 404,
                msg: e.message,
              });
            }
          };

    getRecentProducts(req, res){
      try {
        const strQry = `
            SELECT *
            FROM Products 
            ORDER BY prodID DESC
            LIMIT 5;
            `
        db.query(strQry, (err, results) => {
          if(err) throw new Error(err);
          res.json({
            status: res.statusCode,
            results,
          });
        });
      } catch (e) {
        res.json({
          status: 404,
          msg: e.message,
        });
      }
    }

    getAProduct(req,res){
        try {
            const strQry = `
        SELECT 
        prodID, 
        prodName, 
        quantity, 
        amount, 
        Category, 
        prodUrl
        FROM Products
        WHERE prodID = ${req.params.id};
        `
            db.query(strQry, (err, result) => {
              if(err) throw new Error('Issue occurred while retrieving the desired product')
              res.json({
                status: res.statusCode,
                result: result[0],
              });
            });
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message,
            });
          }
}

    addAProduct(req, res){
      try{
        let data = req.body
        const strQry = `
        INSERT INTO Products
        SET ?;`

        db.query(strQry, [data], (err)=>{
          if(err) throw new Error('Unable to add product😔')
           res.json({
          status:res.statusCode,
          msg: 'Your Product has been added😉'
        }) 
        })
      } catch (e) {
        res.json({
          status: 404,
          err: e.message
        });
      }
    }

     updateAProduct(req,res){
        try {
            let data = req.body;
            const strQry = `
                UPDATE Products SET ? WHERE prodID = '${req.params.id}';
                `;
            db.query(strQry, [data], (err) => {
              if(err) throw new Error("Unable to update product😢");
              res.json({
                status: res.statusCode,
                msg: "The product was updated😁",
              });
            });
          } catch (e) {
            res.json({
              status: 404,
              err: e.message
            });
          }
    }

    deleteAProduct(req,res){
        try {
            const strQry = `
                DELETE FROM Products WHERE prodID = '${req.params.id}';`;
        
            db.query(strQry, (err) => {
              if(err) throw new Error("To delete a product, please review your delete query");
              res.json({
                status: res.statusCode,
                msg: "The product has been removed😁",
              });
            });
          } catch (e) {
            res.json({
              status: 404,
              err: e.message,
            });
          }
    }
} 
export {
    Products
}