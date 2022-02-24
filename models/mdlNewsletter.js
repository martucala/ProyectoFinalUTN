const pool = require("../db")

const getMail = (correo) => {
    const query = "INSERT INTO newsletter_mails (ID, email) VALUES (null, ?)"
    const row = pool.query(query, [correo])
}

module.exports = {
    getMail
}
