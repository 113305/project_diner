var express = require('express');
var router = express.Router();

router.post('/reservationpushs/notifystate', function(req, res, next) {
    var result = {
        "results": {
            "message": "예약 상태 변경 푸시알림 전송이 정상적으로 처리되었습니다."
        }
    };
    res.json(result);
});

router.post('/reservationpushs/notifytime', function(req, res, next) {
    var result = {
        "results": {
            "message": "예약 시간 정보 푸시알림 전송이 정상적으로 처리되었습니다."
        }
    };
    res.json(result);
});

module.exports = router;