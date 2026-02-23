const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");

router.post("/add", uploadController.addUpload);
router.get("/all", uploadController.getAllUploads);

module.exports = router;
