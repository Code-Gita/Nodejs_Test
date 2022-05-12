const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var items = [];

app.get('/', function(req, res){
  // res.sendFile(__dirname + '/' + 'index.html');
  // op_html = __dirname + '/' + 'index.html';
  const d = new Date();
  console.log(d.getDay());
  var day = '';
  switch(d.getDay())
  {
    case 0:
      day='Sunday';
      break;
    case 1:
      day='Monday';
      break;
    case 2:
      day='Tuesday';
      break;
    case 3:
      day='Wednesday';
      break;
    case 4:
      day='Thursday';
      break;
    case 5:
      day='Friday';
      break;
    case 6:
      day='Saturday';
      break;
    default:
      day = 'Invalid Date'
      break;
  }
  res.render('list', {kindOfDay : day, value: " Prateek", newItem: items});
})

app.post('/', function(req, res){
  // console.log(req.body.text1);
  // res.send('Thank you for entering the value' + req.body.text1);
  item = req.body.text1;
  items.push(item);
  res.redirect('/');
})

app.listen(3000, function(){
  console.log('App started' );
});
