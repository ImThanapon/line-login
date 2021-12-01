const request = require('request');

exports.notify = (msg) => {
    request({
        url:'https://notify-api.line.me/api/notify',
        method: 'POST',
        auth: {
            bearer:'siBienXGu1UoR1WiPTxfTeXcBy1Khe9EMle2LRCAnP4'
        },
        form:{
            message: msg
        }
    })
}