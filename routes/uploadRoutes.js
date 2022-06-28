const router = require("express").Router();
const multer = require("multer");
const path = require("path");

// creating the diskStorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cd) {
    cd(
      null,
      `${file.fieldname}-sudazon-${Date.now()}${path.extname(
        file.originalname
      )}`
    );
  },
});
// const filterFileType = (file, cb) => {
//   const arr = [".jpg", ".jpeg", ".pgn"];
//   for (let i = 0; i < arr.length; i++) {
//     const isValid = arr[i];
//     const extname = path.extname(file.originalname);
//     if (isValid === extname) {
//       console.log(isValid === extname);
//       return cb(null, true);
//     } else {
//       cb("Photos only!");
//     }
//   }
// };
const upload = multer({
  storage,
  // fileFilter: (req, file, cb) => {
  //   filterFileType(file, cb);
  // },
});
router.post("/", upload.array("images", 10), (req, res) => {
  try {
    const files = req.files.map((file) => `/${file.path}`);
    console.log(files);
    res.status(200).json(files);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
}),
  (module.exports = router);
