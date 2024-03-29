import { db } from '../db.js';

const getEmployeeFeedbacks = (req, res) => {
    const q = "SELECT `date`, `text`, `username`, `name`, `specialization`, `img`, `fb_employeeId` " +
        "FROM tbl_feedbacks JOIN tbl_users " +
        "ON tbl_feedbacks.fb_userId = tbl_users.id " +
        "JOIN tbl_employees " +
        "ON tbl_feedbacks.fb_employeeId = tbl_employees.id " +
        "WHERE tbl_feedbacks.fb_employeeId=?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
};

const getAllFeedbacks = (req, res) => {
    const q = "SELECT `date`, `text`, `username`, `name`, `specialization`, `img`, `fb_employeeId` " +
        "FROM tbl_feedbacks JOIN tbl_users " +
        "ON tbl_feedbacks.fb_userId = tbl_users.id " +
        "JOIN tbl_employees " +
        "ON tbl_feedbacks.fb_employeeId = tbl_employees.id";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
};

export { getEmployeeFeedbacks, getAllFeedbacks };