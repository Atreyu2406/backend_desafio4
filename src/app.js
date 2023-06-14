import express from "express"
import userRouter from "./routers/user.router.js"
import handlebars from "express-handlebars"

const app = express()

//configuración del motor de plantillas
app.engine("handlebars", handlebars.engine())
app.set ("views", "./src/views")
app.set ("view engine", "handlebars")

// app.use ("./contenido", express.static ("./public"))
app.use (express.static ("./public"))
app.use ("/users", userRouter)

app.get ("/health", (req, res) => res.send ("OK"))
app.get ("/ejemplo", (req, res) => {
    res.render ("ejemplo")
})

app.listen (8080, () => console.log ("Server up..."))