import { db } from '../db.js';

const getEmployeeFeedbacks = (req, res) => {
    const q = "SELECT `date`, `text`, `username`" +
        "FROM tbl_feedbacks JOIN tbl_users " +
        "ON tbl_feedbacks.fb_userId = tbl_users.id " +
        "WHERE tbl_feedbacks.fb_employeeId=?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
};

export { getEmployeeFeedbacks };