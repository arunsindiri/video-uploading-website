const express = require("express");
const app = express();

const db = require("./db");
const uploadRoutes = require("./routes/uploadRoutes");

app.use(express.json());
app.use("/uploads", uploadRoutes);

app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
