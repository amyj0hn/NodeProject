import { userRouter, express } from "./controller/userController.js"
import {productRouter} from "./controller/productController.js"
import path from "path";
// Create an express app
const app = express();
const port = +process.env.PORT || 4001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})

// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})

app.use(
    express.static("./static"),
    express.json(),
    express.urlencoded({
        extended:true
    })
)

// Routers
app.use('/User', userRouter)
app.use('/Product', productRouter)
// Endpoint
app.get("^/$|/NodeProject", (req, res) => {
    res.status(200).sendFile(path.resolve("./static/html/index.html"));
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})