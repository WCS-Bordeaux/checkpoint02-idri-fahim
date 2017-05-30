var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var fs = require('fs');

var users = JSON.parse(fs.readFileSync(__dirname + '/../mocks/users.json', 'utf8'));
var notes = JSON.parse(fs.readFileSync(__dirname + '/../mocks/notes.json', 'utf8'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'))


app.get('/users', function (request, response) {
    console.log("get ")



    response.send(users )
})

getNotes();

function getNotes() {
    // 
    //     console.log(users)
    var jso = users
    // console.log(users["users"][2].email)
    // for (item in users) {
    for (i in users["users"]) {
        // console.log(users["users"][i]._id)
        for (j in notes["notes"]) {
            // console.log(notes["notes"][j].userId)
            if (users["users"][i]._id == notes["notes"][j].userId) {

                // jso[users["users"][i]._id] = [].push(notes["notes"][j].userId)
            }


        }

    }
    console.log(jso)
}



app.listen(9000, function () {

    console.log("serveur sous ecoute: http://127.0.0.1:9000")
})