const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer")

router.get("/", (req, res) => {
    res.render("contacto")
})

router.post("/", (req, res) => {
    const mailCliente = {
        to: "martu.cala@gmail.com",
        from: `${req.body.mail}`,
        subject: "mail atencion al cliente",
        html: `${req.body.message}`        
    }

    var transport = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.port,
        auth: {
          user: process.env.user,
          pass: process.env.pass
        }
    });

    transport.sendMail(mailCliente);

    res.render("contacto")
})



module.exports = router;