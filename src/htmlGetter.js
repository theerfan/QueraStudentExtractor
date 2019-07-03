const request = require('request');

function downloadPage(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) reject(error);
            if (response.statusCode != 200) {
                reject('Invalid status code <' + response.statusCode + '>');
            }
            resolve(body);
        });
    });
}


async function myBackEndLogic(path) {
    try {
        const html = await downloadPage(path)
        return html
    } catch (err) {
        console.log(err)
    }
}

module.exports = myBackEndLogic;