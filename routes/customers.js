var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
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
});

router.delete('/', function(req, res, next) {
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
                        "customer": {
                            "customer_name": "김민선",
                            "customer_phone": "010-111-0111",
                            "email": "alstjs@naver.com"
                        },
                        "reservation": [{
                            "restaurant_name": "아워프레임",
                            "adult_number": "2",
                            "child_number": "1",
                            "date_time": "2016-01-01 06:00:35",
                            "score": "NULL",
                            "etc_request": "새우알러지있어요"
                        }, {
                            "restaurant_name": "아워프레임2",
                            "adult_number": "2",
                            "child_number": "3",
                            "date_time": "2016-01-01 08:10:25",
                            "score": "3",
                            "etc_request": "맵게 해주세여"
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
                    "message": "이름 변경이 정상적으로 처리되었습니다."
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



