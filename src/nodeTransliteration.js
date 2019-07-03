var request = require("request");
var fs = require('fs');

function getTransliteration(word) {
    return new Promise((resolve,reject) => {
        let answer = word;
        let url = encodeURI("https://inputtools.google.com/request?text=" + word + "&itc=fa-t-i0-und");
        // console.log(url);
        request(url, {json: true}, (err, res, body) => {
            if (err || res.statusCode !== 200)
            {
                console.log(word);
                reject(err);
            }
            else
            {
                if (body[0] === 'SUCCESS')
                {
                    var answers = body[1][0][1];
                    answer = answers[0];
                    resolve(answer);
                }
            }
        })
    })
}

module.exports = getTransliteration;