const pool = require("../db")
const md5 = require("md5")

const getUser = async (usuario, contraseña) => {
    const query = "select * from usuarios_autorizados where usuario = ? and contraseña = ?"
    const row = await pool.query(query, [usuario, md5(contraseña)])
    return row[0]
}

module.exports = {
    getUser
}
