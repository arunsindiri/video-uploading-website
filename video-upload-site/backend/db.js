const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "video_user",
    password: "password123",
    database: "video_upload_db"
});

connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL database ✅");
});

module.exports = connection;
