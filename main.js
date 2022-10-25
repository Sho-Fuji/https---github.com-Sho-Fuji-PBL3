window.onload = function(){
document.getElementById("sendButton").onclick = function(){
var name = document.getElementById("name").value;
var search = document.getElementById("search").value;
var sort = document.getElementById("sort").value;
var maxResults = document.getElementById("maxResults").value;
var range = document.getElementById("range").value;
location.href = "next.html?data="+encodeURIComponent(name);
    }
}