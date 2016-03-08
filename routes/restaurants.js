var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    var result = {
        "results": {
            "message": "레스토랑 조회가 정상적으로 처리되었습니다.",
            "data": [
                {
                    "listRestaurant": {
                        "restaurantName": "아워프레임",
                        "dongInfo": "혜화동",
                        "restaurantClass": "새우요리 전문점",
                        "restaurantPhotoUrl": {
                            "restaurantPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/restaurant_photo/ourframe1.png"
                        }
                    },
                    "detailRestaurant": {
                        "restaurantName": "아워프레임",
                        "address": "서울특별시 종로구 혜화동 53-11",
                        "businessHours": "매일12:00~22:00 (월요일 12:00~16:00)",
                        "websiteUrl": "http://ourframe.fordining.kr/",
                        "restaurantClass": "새우요리 전문점",
                        "rewardPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/reward_photo/ourframe_reward.png",
                        "rewardInfo": "자유 선택",
                        "rewardName": "음료 1종류",
                        "takeOut": 0,
                        "parking": 0,
                        "smoking": 0,
                        "breakTime": null,
                        "avgScore": null,
                        "restaurantInfo": "음악과 음식을 사랑하는 젊은 쉐프가 운영하는 따뜻한 음식점",
                        "restaurantPhotoUrl": [
                            {
                                "restaurantPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/restaurant_photo/ourframe1.png"
                            },
                            {
                                "restaurantPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/restaurant_photo/ourframe2.png"
                            },
                            {
                                "restaurantPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/restaurant_photo/ourframe3.png"
                            },
                            {
                                "restaurantPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/restaurant_photo/ourframe_main.jpg"
                            }
                        ],
                        "menu": [
                            {
                                "menuClassId": 2,
                                "menuClassName": "메인디쉬",
                                "menuName": "닭쳐",
                                "menuPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/menu_photo/chicken.JPG",
                                "price": 13900,
                                "mainIngredient": "닭 안심, 푸실리면, 감자, 나초"
                            },
                            {
                                "menuClassId": 2,
                                "menuClassName": "메인디쉬",
                                "menuName": "갈릭버터 쉬림프",
                                "menuPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/menu_photo/garlic_shrimp.JPG",
                                "price": 11000,
                                "mainIngredient": "갈릭버터소스, 쉬림프, 에그라이스"
                            },
                            {
                                "menuClassId": 2,
                                "menuClassName": "메인디쉬",
                                "menuName": "스파이 쉬림프",
                                "menuPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/menu_photo/spicy_shrimp.JPG",
                                "price": 15900,
                                "mainIngredient": "고추장 소스, 쉬림프, 콘샐러드, 양파, 치즈"
                            },
                            {
                                "menuClassId": 2,
                                "menuClassName": "메인디쉬",
                                "menuName": "파마산 치즈 크림 쉬림프",
                                "menuPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/menu_photo/parmesan.JPG",
                                "price": 14000,
                                "mainIngredient": "파마산 치즈, 크림소스, 쉬림프"
                            },
                            {
                                "menuClassId": 2,
                                "menuClassName": "메인디쉬",
                                "menuName": "어벤저스",
                                "menuPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/menu_photo/avengers.JPG",
                                "price": 13900,
                                "mainIngredient": "고구마, 버섯, 두부, 연어"
                            },
                            {
                                "menuClassId": 2,
                                "menuClassName": "메인디쉬",
                                "menuName": "스윗 스파이시 쉬림프",
                                "menuPhotoUrl": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/menu_photo/sweet_spicy.JPG",
                                "price": 13000,
                                "mainIngredient": "고추장 소스, 쉬림프, 에그라이스"
                            },
                            {
                                "menuClassId": 2,
                                "menuClassName": "메인디쉬",
                                "menuName": "스파이시 로제 스파게티",
                                "menuPhotoUrl": null,
                                "price": 13900,
                                "mainIngredient": null
                            },
                            {
                                "menuClassId": 2,
                                "menuClassName": "메인디쉬",
                                "menuName": "루꼴라 토마토 샐러드",
                                "menuPhotoUrl": null,
                                "price": 6000,
                                "mainIngredient": null
                            },
                            {
                                "menuClassId": 2,
                                "menuClassName": "메인디쉬",
                                "menuName": "파마산 치즈 크림 스파게티",
                                "menuPhotoUrl": null,
                                "price": 13900,
                                "mainIngredient": "파마산 치즈, 생크림, 바질, 버섯"
                            },
                            {
                                "menuClassId": 2,
                                "menuClassName": "메인디쉬",
                                "menuName": "치킨 알리오 올리오",
                                "menuPhotoUrl": null,
                                "price": 13900,
                                "mainIngredient": "새우육수"
                            },
                            {
                                "menuClassId": 2,
                                "menuClassName": "메인디쉬",
                                "menuName": "리가토니 까르보나라",
                                "menuPhotoUrl": null,
                                "price": 13900,
                                "mainIngredient": "유정란"
                            },
                            {
                                "menuClassId": 4,
                                "menuClassName": "음료",
                                "menuName": "생과일 오렌지 에이드",
                                "menuPhotoUrl": null,
                                "price": 6000,
                                "mainIngredient": "오렌지"
                            },
                            {
                                "menuClassId": 4,
                                "menuClassName": "음료",
                                "menuName": "생과일 오렌지 주스",
                                "menuPhotoUrl": null,
                                "price": 6000,
                                "mainIngredient": "오렌지"
                            },
                            {
                                "menuClassId": 4,
                                "menuClassName": "음료",
                                "menuName": "생과일 레몬 에이드",
                                "menuPhotoUrl": null,
                                "price": 6000,
                                "mainIngredient": "레몬"
                            },
                            {
                                "menuClassId": 4,
                                "menuClassName": "음료",
                                "menuName": "레몬 생맥주",
                                "menuPhotoUrl": null,
                                "price": 6000,
                                "mainIngredient": "레몬"
                            },
                            {
                                "menuClassId": 4,
                                "menuClassName": "음료",
                                "menuName": "자몽 생맥주",
                                "menuPhotoUrl": null,
                                "price": 6000,
                                "mainIngredient": "자몽"
                            },
                            {
                                "menuClassId": 4,
                                "menuClassName": "음료",
                                "menuName": "청포도 생맥주",
                                "menuPhotoUrl": null,
                                "price": 6000,
                                "mainIngredient": "청포도"
                            },
                            {
                                "menuClassId": 4,
                                "menuClassName": "음료",
                                "menuName": "콜라/스프라이트",
                                "menuPhotoUrl": null,
                                "price": 3000,
                                "mainIngredient": null
                            },
                            {
                                "menuClassId": 4,
                                "menuClassName": "음료",
                                "menuName": "캐모마일",
                                "menuPhotoUrl": null,
                                "price": 3000,
                                "mainIngredient": null
                            },
                            {
                                "menuClassId": 4,
                                "menuClassName": "음료",
                                "menuName": "페퍼민트",
                                "menuPhotoUrl": null,
                                "price": 3000,
                                "mainIngredient": null
                            },
                            {
                                "menuClassId": 4,
                                "menuClassName": "음료",
                                "menuName": "레몬그라스",
                                "menuPhotoUrl": null,
                                "price": 3000,
                                "mainIngredient": null
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