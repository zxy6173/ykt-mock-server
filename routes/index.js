var express = require('express');
var router = express.Router();
var data = require("../data");
var Mock = require("mockjs");

/* GET home page. */
router.all('/*', function(req, res, next) {
    let path = req.originalUrl;
    if(path.indexOf("?") >= 0){
        path = path.substring(0,path.indexOf("?"));
    }
    if(data[path]){
        let mockData;
        if(typeof data[path] == "function"){
            mockData = data[path]();
        }else{
            mockData = Mock.mock(data[path]);
        }
        res.send(mockData);
    }else{
        res.status(404).send('No Data Found!');
    }
});


module.exports = router;
