const express = require("express");
const router = express.Router();
const mdlNewsletter = require("../models/mdlNewsletter")

router.get("/", (req, res) => {
    res.render("index")
})

router.post("/", (req,res) => {
    const { correo } = req.body
    mdlNewsletter.getMail(correo)
    res.redirect("/")
})


module.exports = router;