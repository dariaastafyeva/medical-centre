import { db } from '../db.js';

const getEmployees = (req, res) => {
    const q = "SELECT * FROM tbl_employees";

    db.query(q, (err, data) => {
        console.log(data);
        if (err) return res.send(err);

        return res.status(200).json(data);
    });
};

const getEmployee = (req, res) => {
    const q = "SELECT `name`, `specialization`, `category`, `desc`, `img` " +
    "FROM tbl_employees " +
    "WHERE id=?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
};

const getEmployeeFeedbacks = (req, res) => {
    res.json("from controller!");
};

export { getEmployees, getEmployee, getEmployeeFeedbacks };