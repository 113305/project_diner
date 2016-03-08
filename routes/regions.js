var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    var result = {
        "results": {
            "message": "지역조회가 정상적으로 처리되었습니다.",
            "data": [{
                "regionName": "강남구",
                "regionPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/region/gangnam.png"
            }]
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
                        "restaurantCalss": "수제 돈까스 전문점",
                        "restaurantPhotoUrl": {
                            "restaurantPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/restaurant_photo/mattia1.jpg"
                        }
                    },
                    "detailRestaurant": {
                        "restaurantId": 2,
                        "restaurantName": "마티아",
                        "address": "서울특별시 강남구 삼성동 144번지",
                        "businessHours": "매일14:00~22:00 (수요일 휴무)",
                        "websiteUrl": "http://mattia.com",
                        "rewardPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/reward_photo/mattia_reward.jpg",
                        "rewardInfo": "190Kcal(2조",
                        "rewardName": "요거트 롤 케이크",
                        "takeOut": 0,
                        "parking": 0,
                        "smoking": 0,
                        "breakTime": null,
                        "avgScore": null,
                        "restaurantInfo": "특등급 생고기를 직접 두들겨만든 수제 돈까스 전문점",
                        "restaurantPhotoUrl": [
                            {
                                "restaurant_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/restaurant_photo/mattia1.jpg"
                            },
                            {
                                "restaurant_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/restaurant_photo/mattia2.jpg"
                            },
                            {
                                "restaurant_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/restaurant_photo/mattia3.png"
                            },
                            {
                                "restaurant_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/restaurant_photo/mattia_main.jpg"
                            }
                        ],
                        "menu": [
                            {
                                "menu_class_id": 1,
                                "menu_class_name": "에피타이저",
                                "menu_name": "연어 샐러드",
                                "menu_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/menu_photo/salmon_salad.JPG",
                                "price": 8000,
                                "main_ingredient": "연어, 양배추, 사과 드레싱"
                            },
                            {
                                "menu_class_id": 1,
                                "menu_class_name": "에피타이저",
                                "menu_name": "양송이 스프",
                                "menu_photo_url": null,
                                "price": 4000,
                                "main_ingredient": null
                            },
                            {
                                "menu_class_id": 2,
                                "menu_class_name": "메인디쉬",
                                "menu_name": "등심돈까스",
                                "menu_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/menu_photo/tenderloin_cutlet.jpg",
                                "price": 12000,
                                "main_ingredient": "돼지 등심, 돈까스 소스"
                            },
                            {
                                "menu_class_id": 2,
                                "menu_class_name": "메인디쉬",
                                "menu_name": "안심돈까스",
                                "menu_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/menu_photo/sirloin_cutlet.jpg",
                                "price": 12000,
                                "main_ingredient": "돼지 안심, 돈까스 소스"
                            },
                            {
                                "menu_class_id": 2,
                                "menu_class_name": "메인디쉬",
                                "menu_name": "훈제 연어까스",
                                "menu_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/menu_photo/salmon_cutlet.jpg",
                                "price": 11000,
                                "main_ingredient": "훈제연어, 타르타르소스 "
                            },
                            {
                                "menu_class_id": 2,
                                "menu_class_name": "메인디쉬",
                                "menu_name": "함박 스테이크",
                                "menu_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/menu_photo/hamburger_steak.jpg",
                                "price": 14000,
                                "main_ingredient": "소고기, 체다치즈, 양파"
                            },
                            {
                                "menu_class_id": 2,
                                "menu_class_name": "메인디쉬",
                                "menu_name": "모짜렐라 치즈 돈까스",
                                "menu_photo_url": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/menu_photo/cheese_cutlet.jpg",
                                "price": 13000,
                                "main_ingredient": "모짜렐라 치즈, 참깨 드레싱"
                            },
                            {
                                "menu_class_id": 2,
                                "menu_class_name": "메인디쉬",
                                "menu_name": "우동",
                                "menu_photo_url": null,
                                "price": 7500,
                                "main_ingredient": null
                            },
                            {
                                "menu_class_id": 3,
                                "menu_class_name": "디저트",
                                "menu_name": "감자튀김",
                                "menu_photo_url": null,
                                "price": 4500,
                                "main_ingredient": "감자"
                            },
                            {
                                "menu_class_id": 4,
                                "menu_class_name": "음료",
                                "menu_name": "콜라",
                                "menu_photo_url": null,
                                "price": 1000,
                                "main_ingredient": null
                            },
                            {
                                "menu_class_id": 4,
                                "menu_class_name": "음료",
                                "menu_name": "사이다",
                                "menu_photo_url": null,
                                "price": 1000,
                                "main_ingredient": null
                            },
                            {
                                "menu_class_id": 4,
                                "menu_class_name": "음료",
                                "menu_name": "맥주",
                                "menu_photo_url": null,
                                "price": 4000,
                                "main_ingredient": null
                            },
                            {
                                "menu_class_id": 4,
                                "menu_class_name": "음료",
                                "menu_name": "소주",
                                "menu_photo_url": null,
                                "price": 3500,
                                "main_ingredient": null
                            }
                        ]
                    }
                }
            ]
        }
    }

    res.json(result);
});


module.exports = router;