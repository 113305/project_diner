var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
    if (req.secure) {
        var result = {
            "results": {
                "message": "로그인이 정상적으로 처리되었습니다."
            }
        };
        res.json(result);
    } else {
        var err = new Error('SSL/TLS Ugrades Required');
        err.status = 426;
        next(err);
    }
});

router.post('/facebook/token', function(req, res, next) {
    if (req.secure) {
        var result = {
            "results": {
                "message": "페이스북 토큰 수신이 정상적으로 처리되었습니다."
            }
        };
        res.json(result);
    } else {
        var err = new Error('SSL/TLS Ugrades Required');
        err.status = 426;
        next(err);
    }
});

router.get('/password', function(req, res, next) {
    if (req.secure) {
        var result = {
            "results": {
                "message": "이메일 계정 확인이 정상적으로 처리되었습니다."
            }
        };
        res.json(result);
    } else {
        var err = new Error('SSL/TLS Ugrades Required');
        err.status = 426;
        next(err);
    }
});

router.put('/password/:customerId', function(req, res, next) {
    if (req.secure) {
        var result = {
            "results": {
                "message": "임시 비밀번호 발급이 정상적으로 처리되었습니다."
            }
        };
        res.json(result);
    } else {
        var err = new Error('SSL/TLS Ugrades Required');
        err.status = 426;
        next(err);
    }
});

module.exports = router;