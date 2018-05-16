// var aloha="Aloha Variables";
// console.log(aloha);

var express =require('express');
var app=express();
var port=5000;//process.env.PORT;
app.listen(port, function(err)
{
console.log('The server is running on port '+port+'.....');
});

