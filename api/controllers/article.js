import { db } from '../db.js';

const getArticles = (req, res) => {
    const q = "SELECT * FROM tbl_articles";

    db.query(q, (err, data) => {
        console.log(data);
        if (err) return res.send(err);

        return res.status(200).json(data);
    });
};

const getArticle = (req, res) => {
    res.json("from controller!");
};

export { getArticles, getArticle};