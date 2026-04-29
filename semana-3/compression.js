import express from "express";
import compression from "express-compression";
import userRoutes from "./routes/user.routes.js"
import manejadorError from "./middlewares/hadleError.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression({
    brotli: {
        enabled: true,
        zlib: {}
    }
}))




app.get("/compression", (req, res) => {

    let string = " Hola comision somos programadores y no sabemos arreglar impresoras";

    for (let i = 0; i < 5e4; i++) {
        string += " Hola comision somos programadores y no sabemos arreglar impresoras"
    }

    return res.send(string)
})


app.use("/api/users", userRoutes)

app.use(manejadorError)

app.listen(4000, () => {
    console.log("Servidor corriendo en http://localhost:4000");
});


// sin comression : 3.4 MB
// con compression gzip 14.5 kB
// con compression brotli 3.1 kB
