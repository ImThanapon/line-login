const request = require('request');

exports.notify = (msg) => {
    request({
        url:'https://notify-api.line.me/api/notify',
        method: 'POST',
        auth: {
            bearer:'u62hrJH1DeL1KO5ocEUp5ffG1HGr6cIIa3elprE3IRP'
        },
        form:{
            message: msg
        }
    })
}