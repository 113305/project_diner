var express = require('express');
var router = express.Router();
// url 같으면 get으로 동작

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
                            "customerName": "김민선",
                            "customerPhone": "010-111-0111",
                            "customerEmail": "alstjs@naver.com",
                            "showCount": "4"
                        },
                        "reservation": [{
                            "restaurantId": "1",
                            "restaurantName": "아워프레임",
                            "adultNumber": "2",
                            "childNumber": "1",
                            "dateTime": "2016-01-01 06:00:35",
                            "etcRequest": "새우알러지있어요",
                            "menu": [{
                                "menuName": "닭쳐",
                                "quantity": "1"
                            },
                                {
                                    "menuName": "갈릭버터 쉬림프",
                                    "quantity": "2"
                                }]
                        }, {
                            "restaurant_name": "마티아",
                            "adult_number": "2",
                            "child_number": "3",
                            "date_time": "2016-01-01 08:10:25",
                            "etc_request": "맵게 해주세여",
                            "menu": [{
                                "menuName": "등심돈까스",
                                "quantity": "1"
                            },
                                {
                                    "menuName": "안심돈까스",
                                    "quantity": "2"
                                }]
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

