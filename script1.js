var request =  new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){
var res = JSON.parse(request.response);
console.log(res);
}