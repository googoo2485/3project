// const express = require('express');
// const router = express.Router();
// const session = require('./session');
// const multer = require('multer');
// router.use(session)



// // 기타 express 코드
// const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });
// /* Create new image */
// router.post('/', function(req, res, next) {
//     res.send('test');
//   });
  
// let upload = function (req, res) {
//     let deferred = Q.defer();
//     let storage = multer.diskStorage({
//     // 서버에 저장할 폴더 
//     destination: function (req, file, cb) {
//     cb(null, imagePath);
//     },

//     // 서버에 저장할 파일 명
//     filename: function (req, file, cb) {
//     file.uploadedFile = {
//         name: req.params.filename,
//         ext: file.mimetype.split('/')[1]
//     };
//     cb(null, file.uploadedFile.name + '.' + file.uploadedFile.ext);
//     }
// });

// let upload = multer({ storage: storage }).single('file');
// upload(req, res, function (err) {
//     if (err) deferred.reject();
//     else deferred.resolve(req.file.uploadedFile);
// });
// return deferred.promise;
// };


// /* Create new image */
// router.post('/:filename', function(req, res, next) {
//   upload(req, res).then(function (file) {
//     res.json(file);
//   }, function (err) {
//     res.send(500, err);
//   });
// });
// module.exports = router;
