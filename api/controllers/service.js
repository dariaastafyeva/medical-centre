import { db } from '../db.js';

const getEmployeeServices = (req, res) => {
    const q = "SELECT tbl_services.name, `duration`, `price`" +
        "FROM tbl_services JOIN tbl_employees " +
        "ON tbl_services.sr_employeeId = tbl_employees.id " +
        "WHERE tbl_employees.id=?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
};

export { getEmployeeServices };