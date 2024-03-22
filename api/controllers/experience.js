import { db } from '../db.js';

const getEmployeeExperience = (req, res) => {
    const q = "SELECT `yearInterval`, `place`, `type`" +
        "FROM tbl_experiences JOIN tbl_employees " +
        "ON tbl_experiences.exp_employeeId = tbl_employees.id " +
        "WHERE tbl_employees.id=?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
};

export { getEmployeeExperience }