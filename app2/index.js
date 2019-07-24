const express = require('express')
var bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
 
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => res.render('form'))
app.post('/signIn', function(req, res){
    res.send("recieved your request!");
 });

app.listen(8000, () => console.log("running on port 8000"));