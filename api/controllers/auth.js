import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
    //CHECK EXISTING USER
    const q = "SELECT * FROM tbl_users WHERE username = ?";
    // const username = req && req.body && req.body
    db.query(q, [req?.body.username], (err, data) => {
        console.log(data[0]?.password)
        if (err) return res.json(err);
        if (data.length === 0) return res?.status(404).json("User not found");

        // Check password
        console.log(`${req.body.password} ?= ${data[0].password} : ${req.body.password === data[0].password}`)
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
console.log(isPasswordCorrect)
        if (!isPasswordCorrect) return res.status(400).json("Wrong username or password!");

        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        const { password, ...other } = data[0];

        res
            .cookie("access_token", token, {
                httpOnly: true
            })
            .status(200)
            .json(other);
    });
}

export const register = (req, res) => {

    //CHECK EXISTING USER
    const q = "SELECT * FROM tbl_users WHERE username = ? OR email = ?"

    db.query(q, [req.body.username, req.body.email], (err, data) => {

        if(err) return res.json(err);
        if(data.length > 0) return res.status(409).json("User already exist!");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const query = "INSERT INTO tbl_users (`username`, `login`, `password`, `email`, `phone`, `role`) VALUES (?)";

        const email = req.body.email ? req.body.email : null;
        const phone = req.body.phone ? req.body.phone : null;
        const role = "user"

        const values = [
            req.body.username,
            req.body.username,
            hash,
            email,
            phone,
            role
        ];

        db.query(query, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created!");
        });
    });
}

export const logout = (req, res) => {

    // res
    //     .clearCookie("access_token", {
    //         sameSite: "none",
    //         secure: true
    //     })
    //     .status(200)
    //     .json("User has been successfully logged out");
}
