import express from "express"
import cors from "cors"
import routes from './routes/common_routes.js'
import connect_Db from "./Database/DB.js"
import adminRoutes from "./routes/admin_routes.js"


const serverApp = express()
connect_Db()

const PORT = 5000
serverApp.listen(PORT, () => {
    console.log(`server is listing on http://localhost:${PORT}`);

})
serverApp.use(express.static("public"))
serverApp.use(cors())                                 // its a middlware beeteen
serverApp.use(express.json())                         // use when data is get from UI to backend
serverApp.use("/bloodPortal", routes)
serverApp.use("/admin", adminRoutes)

serverApp.get("/", (request, response) => {
    response.send("<h1>this is Home Page</h1>")
})
serverApp.get("/contactus", (request, response) => {
    response.send("<h1>this is contact us Response</h1>")
})
serverApp.get("/feedback", (request,response)=>{
    response.send("<h1>this is feedback page</h1>")
})
serverApp.get("/userlogin", (request,response)=>{
    response.send("<h1>this is user login page</h1>")
})
serverApp.get("/registration", (request,response)=>{
    response.send("<h1>this is registration page</h1>")
})