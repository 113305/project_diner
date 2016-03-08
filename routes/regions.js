var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    var result = {
        "results": {
            "message": "지역조회가 정상적으로 처리되었습니다.",
            "data":  [
                {
                    "region_name": "강남구",
                    "region_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/region/gangnam.png"
                },
                {
                    "region_name": "종로구",
                    "region_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/region/jongno.png"
                },
                {
                    "region_name": "마포구",
                    "region_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/region/mapo.png"
                },
                {
                    "region_name": "송파구",
                    "region_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/region/songpa.png"
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
            "data": [
                {
                    "listRestaurant": {
                        "restaurantName": "마티아",
                        "dongInfo": "삼성동",
                        "restaurantClass": "수제 돈까스 전문점",
                        "restaurantPhotoUrl": {
                            "restaurantPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/restaurant_photo/mattia1.jpg"
                        }
                    }
                }]
        }
    };
    res.json(result);
});


module.exports = router;