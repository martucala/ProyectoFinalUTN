const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("dotenv").config()
const PORT = 3000;

const routeIndex = require("./routes/index");
const routeLogin = require("./routes/login");
const routeContacto = require("./routes/contacto");
const routeCarrito = require("./routes/carrito");
const routeConservas = require("./routes/conservas");
const routeMermeladas = require("./routes/mermeladas");
const routeSecret = require("./routes/secret");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "./views/partials"));

app.use("/", routeIndex);
app.use("/login", routeLogin);
app.use("/contacto", routeContacto);
app.use("/carrito", routeCarrito);
app.use("/conservas", routeConservas);
app.use("/mermeladas", routeMermeladas);
app.use("/secret", routeSecret);

app.listen(PORT)

