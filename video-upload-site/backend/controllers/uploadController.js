const db = require("../db");

exports.addUpload = (req, res) => {
    const { username, upload_time } = req.body;

    if (!username || !upload_time) {
        return res.status(400).json({ message: "Missing fields" });
    }

    const sql = "INSERT INTO uploads (username, upload_time) VALUES (?, ?)";

    db.query(sql, [username, upload_time], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "DB insert failed" });
        }

        res.json({
            message: "Upload saved successfully",
            id: result.insertId
        });
    });
};

exports.getAllUploads = (req, res) => {

    const sql = "SELECT * FROM uploads ORDER BY id DESC";

    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "DB fetch failed" });
        }

        res.json(results);
    });
};
