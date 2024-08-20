import { userRouter, express } from "./controller/userController.js"
import {productRouter} from "./controller/productController.js"
import path from "path";
// Create an express app
const app = express();
const port = +process.env.PORT || 4001;

// Middleware
app.use(
    express.static("./static"),
    express.json(),
    express.urlencoded({
        extended:true
    })
)

// Routers
app.use('/Users', userRouter)
app.use('/Products', productRouter)
// Endpoint
app.get("^/$|/NodeProject", (req, res => {
    res.status(200).sendFile(path.resolve("./static/html/index.html"));
}))

// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})