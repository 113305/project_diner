var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    var result = {
        "results": {
            "message": "지역조회가 정상적으로 처리되었습니다.",
            "data":  [
                {
                    "regionName": "강남구",
                    "regionPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/region/gangnam.png"
                },
                {
                    "regionName": "종로구",
                    "regionPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/region/jongno.png"
                },
                {
                    "regionName": "마포구",
                    "regionPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/region/mapo.png"
                },
                {
                    "regionName": "송파구",
                    "regionPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/region/songpa.png"
                }
            ]
        }
    };
    res.json(result);
});


router.get('/:regionId', function(req, res, next) {
    var result = {
        "results": {
            "message": "레스토랑 조회가 정상적으로 처리되었습니다.",
            "data": [{
                "restaurantId": "2",
                "restaurantName": "마티아",
                "dongInfo": "삼성동",
                "restaurantClass": "수제 돈까스 전문점",
                "restaurantPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/restaurant_photo/mattia1.jpg"
            }]
        }
    };
    res.json(result);
});


module.exports = router;