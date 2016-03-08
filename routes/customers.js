var express = require('express');
var router = express.Router();
// restaurantPhotoUrl 같으면 get으로 동작

router.route('/')
    .post(function(req, res, next) {
        if (req.secure) {
            var result = {
                "results": {
                    "message": "회원가입이 정상적으로 처리되었습니다."
                }
            };
            res.json(result);
        } else {
            var err = new Error('SSL/TLS Upgrades Requires');
            err.status = 426;
            next(err);
        }
    })
    .delete(function(req, res, next) {
        var result = {
            "results": {
                "message": "회원탈퇴가 정상적으로 처리되었습니다."
            }
        };
        res.json(result);
    });


router.route('/me')
    .get(function(req, res, next) {
        if (req.secure) {
            var result = {
                "results": {
                    "message": "회원 정보 조회가 정상적으로 처리되었습니다.",
                    "data": {
                        "profile": {
                            "customerName": "박선미",
                            "customerPhone": "01075603878",
                            "customerEmail": "kitty0704@naver.com",
                            "showCount": "0"
                        },
                        "reservation": [{
                            "restaurantId": "1",
                            "restaurantName": "아워프레임",
                            "adultNumber": "2",
                            "childNumber": "3",
                            "dateTime": "2016-11-25 10:30:00",
                            "etcRequest": "맵게 해주세요",
                            "menu": [{
                                "menuName": "닭쳐",
                                "quantity": "1"
                            },
                                {
                                    "menuName": "갈릭버터 쉬림프",
                                    "quantity": "2"
                                }],
                            "photo": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/ourframe/restaurant_photo/ourframe1.png"
                        }, {
                            "restaurantName": "마티아",
                            "adultNumber": "3",
                            "childNumber": "4",
                            "dateTime": "2017-02-25 17:40:00",
                            "etcRequest": "맵게 해주세여",
                            "menu": [{
                                "menuName": "등심돈까스",
                                "quantity": "2"
                            },
                                {
                                    "menuName": "훈제 연어까스",
                                    "quantity": "4"
                                }],
                            "photo": "https://s3.ap-northeast-2.amazonaws.com/diner-img/restaurant/mattia/restaurant_photo/mattia1.jpg"
                        }]
                    }
                }
            };

            res.json(result);
        } else {
            var err = new Error('SSL/TLS Upgrades Requires');
            err.status = 426;
            next(err);
        }
    })
    .put(function(req, res, next) {
        if (req.secure) {
            var result = {
                "results": {
                    "message": "회원 정보 변경이 정상적으로 처리되었습니다."
                }
            };
            res.json(result);
        } else {
            var err = new Error('SSL/TLS Upgrades Requires');
            err.status = 426;
            next(err);
        }
    });

module.exports = router;

