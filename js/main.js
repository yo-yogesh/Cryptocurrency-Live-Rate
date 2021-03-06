var btnRipple = document.getElementById('btnRipple');
var btnetherum = document.getElementById('btnetherum');
var btnbit = document.getElementById('btnbit');
var btnbitcash = document.getElementById('btnbitcash');
var btnlitecoin = document.getElementById('btnlitecoin');
var buttonCounter = 0;

var rippleCointainer = document.getElementById('rippleCointainer');
var etherumCointainer = document.getElementById('etherumCointainer');
var bitcoinCointainer = document.getElementById('bitcoinCointainer');
var bitcashCointainer = document.getElementById('bitcashCointainer');
var litecoinCointainer = document.getElementById('litecoinCointainer');

btnRipple.addEventListener("click", function(){

  var myRequest = new XMLHttpRequest();
  myRequest.open('GET','https://koinex.in/api/ticker');
  myRequest.onload = function(){
    if(myRequest.status >= 200 && myRequest.status < 400){
    var myData = JSON.parse(myRequest.responseText);
    createHTMLRipple(myData);

  }
  else {
    console.log("Connect to the server, but returned error")
  }
  };
  myRequest.send();
  buttonCounter++;
  if(buttonCounter > 0)
  {
    btnRipple.classList.add("hide-me");
  }
});


btnetherum.addEventListener("click", function(){
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET','https://koinex.in/api/ticker');
  myRequest.onload = function(){
    if(myRequest.status >= 200 && myRequest.status < 400){
    var myData = JSON.parse(myRequest.responseText);

    createHTMLEthinium(myData);

  }
  else {
    console.log("Connect to the server, but returned error")
  }
  };
  myRequest.send();
  buttonCounter++;
  if(buttonCounter > 0)
  {
    btnetherum.classList.add("hide-me");
  }
});


btnbit.addEventListener("click", function(){
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET','https://koinex.in/api/ticker');
  myRequest.onload = function(){
    if(myRequest.status >= 200 && myRequest.status < 400){
    var myData = JSON.parse(myRequest.responseText);
    createHTMLBitcoin(myData);

  }
  else {
    console.log("Connect to the server, but returned error")
  }
  };
  myRequest.send();
  buttonCounter++;
  if(buttonCounter > 0)
  {
    btnbit.classList.add("hide-me");
  }
});



btnbitcash.addEventListener("click", function(){
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET','https://koinex.in/api/ticker');
  myRequest.onload = function(){
    if(myRequest.status >= 200 && myRequest.status < 400){
    var myData = JSON.parse(myRequest.responseText);
    createHTMLBitcoinCash(myData);

  }
  else {
    console.log("Connect to the server, but returned error")
  }
  };
  myRequest.send();
  buttonCounter++;
  if(buttonCounter > 0)
  {
    btnbitcash.classList.add("hide-me");
  }
});


btnlitecoin.addEventListener("click", function(){
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET','https://koinex.in/api/ticker');
  myRequest.onload = function(){
    if(myRequest.status >= 200 && myRequest.status < 400){
    var myData = JSON.parse(myRequest.responseText);
    createHTMLLitcoin(myData);

  }
  else {
    console.log("Connect to the server, but returned error")
  }
  };
  myRequest.send();
  buttonCounter++;
  if(buttonCounter > 0)
  {
    btnlitecoin.classList.add("hide-me");
  }
});


function createHTMLRipple(data){
  var myString = ""

  myString += "<span><p> The Current Price of Ripple is: " + data.prices.XRP + "</p></span>";
  myString += "<span><p> The lowest Price of Ripple in 24 hrs: " + data.stats.XRP.min_24hrs + "</p></span>";
  myString += "<span><p> The highest Price of Ripple in 24 hrs: " + data.stats.XRP.max_24hrs + "</p></span>";
  myString += "<span><p> The last trade Price of Ripple is: " + data.stats.XRP.last_traded_price + "</p></span><br>";
  rippleCointainer.insertAdjacentHTML('beforeend',myString);
}

function createHTMLEthinium(data){
  var myString = ""

  myString += "<span><p> The Current Price of Ethereum is: " + data.prices.ETH + "</p></span>";
  myString += "<span><p> The lowest Price of Ethereum in 24 hrs: " + data.stats.ETH.min_24hrs + "</p></span>";
  myString += "<span><p> The highest Price of Ethereum in 24 hrs: " + data.stats.ETH.max_24hrs + "</p></span>";
  myString += "<span><p> The last trade Price of Ethereum is: " + data.stats.ETH.last_traded_price + "</p></span><br><br>";
  etherumCointainer.insertAdjacentHTML('afterend',myString);
//  document.getElementById('etherumCointainer').innerHtml = myString;
}



function createHTMLBitcoin(data){
  var myString = ""

  myString += "<p> The Current Price of BitCoin is: " + data.prices.BTC + "</p>";
  myString += "<p> The lowest Price of BitCoin in 24 hrs: " + data.stats.BTC.min_24hrs + "</p>";
  myString += "<p> The highest Price of BitCoin in 24 hrs: " + data.stats.BTC.max_24hrs + "</p>";
  myString += "<p> The last trade Price of BitCoin is: " + data.stats.BTC.last_traded_price + "</p><br><br>";
  bitcoinCointainer.insertAdjacentHTML('afterend',myString);
}


function createHTMLBitcoinCash(data){
  var myString = ""

  myString += "<p> The Current Price of BitCoin Cash is: " + data.prices.BCH + "</p>";
  myString += "<p> The lowest Price of BitCoin Cash in 24 hrs: " + data.stats.BCH.min_24hrs + "</p>";
  myString += "<p> The highest Price of BitCoin Cash in 24 hrs: " + data.stats.BCH.max_24hrs + "</p>";
  myString += "<p> The last trade Price of BitCoin Cash is: " + data.stats.BCH.last_traded_price + "</p><br><br>";
  bitcashCointainer.insertAdjacentHTML('afterend',myString);
}


function createHTMLLitcoin(data){
  var myString = ""

  myString += "<p> The Current Price of LiteCoin is: " + data.prices.LTC + "</p>";
  myString += "<p> The lowest Price of LiteCoin in 24 hrs: " + data.stats.LTC.min_24hrs + "</p>";
  myString += "<p> The highest Price of LiteCoin in 24 hrs: " + data.stats.LTC.max_24hrs + "</p>";
  myString += "<p> The last trade Price of LiteCoin is: " + data.stats.LTC.last_traded_price + "</p><br><br>";
  litecoinCointainer.insertAdjacentHTML('afterend',myString);
}
