const rp = require('request-promise-native')

function other() {
    return rp(
        {
            method: 'GET',
            uri: 'http://localhost:9999/teste',
            json: true
        }
    )
        .then(function (res) {
            return res;
        }).catch(function (err) {
            console.log(err);
        })
}

function alexx(){
    return 123;
}

exports.other = other
exports.alexx = alexx

// var dois = other().then(res => {
//     console.log(res)
// });

// console.log('dois ', dois);