var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    var result = {
        "results": {
            "message": "레스토랑 검색이 정상적으로 처리되었습니다.",
            "data": [{
                "list_restaurant": {
                    "restaurant_name": "아워프레임",
                    "restaurant_photo_url": "사진.jpg",
                    "dong_info": "혜화동",
                    "restaurant_class": "새우요리 전문점"
                },
                "detail_restaurant": {
                    "restaurant_name": "아워프레임",
                    "address": "서울 혜화어딘가",
                    "website_url": "www.naver.com",
                    "price_range": "1000~2000원",
                    "reward_photo_url": "사진.jpg",
                    "reward_info": "250ml",
                    "reward_name": "사이다",
                    "take_out": "true",
                    "parking": "false",
                    "smoking": "false",
                    "break_time": "12:00~1:00",
                    "avg_score": "4.5",
                    "restaurant_photo_url": ["레스토랑.jpg", "레스토랑1.jpg"],
                    "restaurant_info": "맛있는 새우요리 전문점 아워프레임입니다.",
                    "menu": [{
                        "menu_name": "닭쳐",
                        "price": "20000",
                        "main_ingredient": "닭, 핫소스",
                        "menu_photo_url": "인기사진.jpg",
                        "popular": "true"
                    }, {
                        "menu_name": "새우그라탕",
                        "price": "10000",
                        "main_ingredient": "새우, 치즈",
                        "menu_photo_url": "null",
                        "popular": "false"
                    }]
                }
            }, {
                "list_restaurant": {
                    "restaurant_name": "다이너 식당",
                    "restaurant_photo_url": "사진1.jpg",
                    "dong_info": "낙성대",
                    "restaurant_class": "학식 전문점"
                },
                "detail_restaurant": {
                    "restaurant_name": "다이너 식당",
                    "address": "낙성대 어딘가",
                    "website_url": "www.google.com",
                    "price_range": "1000~20020원",
                    "reward_photo_url": "사진1.jpg",
                    "reward_info": "250ml",
                    "reward_name": "콜라",
                    "take_out": "true",
                    "parking": "true",
                    "smoking": "false",
                    "break_time": "12:00~1:00",
                    "avg_score": "4.5",
                    "restaurant_photo_url": ["레스토랑1.jpg", "레스토랑21.jpg"],
                    "restaurant_info": "T아카데미의 다이너입니다.",
                    "menu": [{
                        "menu_name": "냠냠",
                        "price": "2000",
                        "main_ingredient": "과자",
                        "menu_photo_url": "인기사진1.jpg",
                        "popular": "true"
                    }, {
                        "menu_name": "새우그라탕",
                        "price": "10000",
                        "main_ingredient": "새우, 치즈",
                        "menu_photo_url": "null",
                        "popular": "false"
                    }]
                }
            }]
        }
    };
    res.json(result);
});

module.exports = router;