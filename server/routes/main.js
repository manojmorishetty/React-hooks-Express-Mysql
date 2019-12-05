const middleware = require('../controllers/Athletes.js')
const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });



router.get('/athletes', (req, res, next) => {
    middleware.getAllAthletes().then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})

router.get('/athletes/:id', (req, res, next) => {
    middleware.getSingleAthlete(req.params.id).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})

router.post('/uploadjsonathlete', upload.single('file'),(req, res, next) => {
    debugger;
    middleware.getJSONFile(req.file).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})

router.delete('/athletes/:id', (req, res, next) => {
    middleware.deleteAthlete(req.params.id).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})



module.exports = router;
