var request = require('request');
const { client_id, client_secret} = require('./settings.json');


url = "https://id.twitch.tv/oauth2/token"

data = {
    "client_id": client_id,
    "client_secret": client_secret,
    "grant_type": "client_credentials",
}

console.log(data)

request.post(
    url,
    { json: data },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);