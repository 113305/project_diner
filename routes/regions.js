var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    var result = {
        "results": {
            "message": "지역조회가 정상적으로 처리되었습니다.",
            "data": [{
                "regionName": "강남구",
                "regionPhotoUrl": "사진.jpg"
            }]
        }
    };
    res.json(result);
});

router.get('/:regionId', function(req, res, next) {
    var result = {
        "results": {
            "message": "레스토랑 조회가 정상적으로 처리되었습니다.",
            "data": [{
                "listRestaurant": {
                    "restaurantName": "아워프레임",
                    "restaurantPhotoUrl": "사진.jpg",
                    "dongInfo": "혜화동",
                    "restaurantClass": "새우요리 전문점"
                },
                "detailRestaurant": {
                    "restaurantName": "아워프레임",
                    "address": "서울 혜화어딘가",
                    "websiteUrl": "www.naver.com",
                    "rewardPhotoUrl": "사진.jpg",
                    "rewardInfo": "250ml",
                    "rewardName": "사이다",
                    "takeOut": "true",
                    "parking": "false",
                    "smoking": "false",
                    "breakTime": "12:00~1:00",
                    "avgScore": "4.5",
                    "restaurantPhotoUrl": ["레스토랑.jpg", "레스토랑1.jpg"],
                    "restaurantInfo": "맛있는 새우요리 전문점 아워프레임입니다.",
                    "menu": [{
                        "menuName": "닭쳐",
                        "price": "20000",
                        "mainIngredient": "닭, 핫소스",
                        "menuPhotoUrl": "인기사진.jpg",
                        "popular": "true"
                    }, {
                        "menuName": "새우그라탕",
                        "price": "10000",
                        "mainIngredient": "새우, 치즈",
                        "menuPhotoUrl": "null",
                        "popular": "false"
                    }]
                }
            }, {
                "listRestaurant": {
                    "restaurant_name": "다이너 식당",
                    "restaurantPhotoUrl": "사진1.jpg",
                    "dongInfo": "낙성대",
                    "restaurantClass": "학식 전문점"
                },
                "detailRestaurant": {
                    "restaurantName": "다이너 식당",
                    "address": "낙성대 어딘가",
                    "websiteUrl": "www.google.com",
                    "rewardPhotoUrl": "사진1.jpg",
                    "rewardInfo": "250ml",
                    "rewardName": "콜라",
                    "takeOut": "true",
                    "parking": "true",
                    "smoking": "false",
                    "breakTime": "12:00~1:00",
                    "avgScore": "4.5",
                    "restaurantPhotoUrl": ["레스토랑1.jpg", "레스토랑21.jpg"],
                    "restaurantInfo": "T아카데미의 다이너입니다.",
                    "menu": [{
                        "menuName": "냠냠",
                        "price": "2000",
                        "mainIngredient": "과자",
                        "menuPhotoUrl": "인기사진1.jpg",
                        "popular": "true"
                    }, {
                        "menuName": "새우그라탕",
                        "price": "10000",
                        "mainIngredient": "새우, 치즈",
                        "menuPhotoUrl": "null",
                        "popular": "false"
                    }]
                }
            }]
        }
    };

    res.json(result);
});


module.exports = router;