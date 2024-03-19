import mysql from "mysql"

export const ds = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "password",
    database: "medcentre"
})