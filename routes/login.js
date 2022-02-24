const express = require("express");
const async = require("hbs/lib/async");
const router = express.Router();
const mdlUsers = require("../models/mdlUsers")

router.get("/", (req, res) => {
    res.render("login")
})

router.post("/", async (req, res) => {
    const { usuario, contraseña } = req.body
    const data = await mdlUsers.getUser(usuario, contraseña)
    if (data != undefined){
        res.redirect("secret")
    } else {
        res.render("login")
    }
})

module.exports = router;