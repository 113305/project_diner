var express = require('express');
var router = express.Router();

router.route('/')
    .post(function(req, res, next) {
        var result = {
            "results": {
                "message": "예약이 정상적으로 처리되었습니다."
            }
        };
        res.json(result);
    })

    .get(function(req, res, next) {
        var result = {
            "results": {
                "message": "예약 정보 조회가 정상적으로 처리되었습니다.",
                "data": {
                    "reservation_id": "1"
                }
            }
        };
        res.json(result);
    });

router.route('/:reservationId')
    .put(function(req, res, next) {
        var result = {
            "results": {
                "message": "예약변경/취소가 정상적으로 처리되었습니다."
            }
        };
        res.json(result);
    })
    .post(function(req, res, next) {
         var result = {
            "results": {
                "message": "show확인이 정상적으로 처리되었습니다."
             }
          };
             res.json(result);
    });

module.exports = router;
