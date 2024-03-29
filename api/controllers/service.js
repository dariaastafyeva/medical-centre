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

const getAllServiceGroups = (req, res) => {
    const q = "SELECT DISTINCT tbl_service_sub_groups.id, ANY_VALUE(tbl_services.id) AS `serviceId`, `subGroupName`, `imgName`, tbl_service_groups.id AS `groupId`, `groupName` " +
        "FROM tbl_service_sub_groups JOIN tbl_service_groups " +
        "ON tbl_service_sub_groups.sr_sb_gr_serviceGroupId = tbl_service_groups.id " +
        "JOIN tbl_services " +
        "ON tbl_services.sr_subGroupId = tbl_service_sub_groups.id " +
        "GROUP BY tbl_service_sub_groups.id";

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
};

const getAllServicesBySubGroup = (req, res) => {
    const q = "SELECT `subGroupName`, `imgName`, tbl_services.id, tbl_services.name AS `serviceName`, `duration`, `price`, `sr_employeeId`, tbl_employees.name AS `employeeName` " +
        "FROM medcentre.tbl_services JOIN medcentre.tbl_service_sub_groups " +
        "ON tbl_services.sr_subGroupId = tbl_service_sub_groups.id " +
        "JOIN medcentre.tbl_employees " +
        "ON tbl_services.sr_employeeId = tbl_employees.id " +
        "WHERE tbl_services.sr_subGroupId=?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
};

export { getEmployeeServices, getAllServiceGroups, getAllServicesBySubGroup };