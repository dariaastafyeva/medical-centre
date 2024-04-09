import { db } from '../db.js';

const getArticles = (req, res) => {
    const q = "SELECT * FROM tbl_articles";

    db.query(q, (err, data) => {
        if (err) return res.send(err);

        return res.status(200).json(data);
    });
};

const getArticle = (req, res) => {
    const q = "SELECT `img`, `tag`, `title`, `duration`, `desc`, `text` " +
        "FROM tbl_articles " +
        "WHERE id=?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
};

export { getArticles, getArticle};