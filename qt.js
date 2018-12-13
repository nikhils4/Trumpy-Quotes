const request = require("request");


var getQuotes = (callback) => {
    request ({
        url : 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
        json : true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to server try again later !');
        }
        else {
            callback(undefined, {
                quotes : body.message,
            })
        }


    });
};

module.exports.getQuotes = getQuotes;