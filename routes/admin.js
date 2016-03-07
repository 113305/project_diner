var express = require('express');
var router = express.Router();

router.get('/:reservationId', function(req, res, next) {
    var result = {
        "results": {
            "message": "푸시알림 전송이 정상적으로 처리되었습니다."
        }
    };
    res.json(result);
});


module.exports = router;