window.onload = function(){

var SearchButton = document.getElementById("lookup");
var lookup = document.getElementById("term");

SearchButton.onclick = function() {
var text = lookup.value;
var request = new Ajax.Request();

request.open("GET","world.php?lookup=" + text,false);
request.send();

document.getElementById("result").innerHTML = request.responseText;
}
};