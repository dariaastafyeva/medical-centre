import { db } from '../db.js';

const getEmployeeSchedule = (req, res) => {
    const q = "SELECT tbl_schedules.dayOfWeek, tbl_schedules.from, tbl_schedules.to " +
        "FROM tbl_schedules " +
        "WHERE sch_employeeId=?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
};

export { getEmployeeSchedule };