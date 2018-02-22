module.exports = function getZerosCount(number, base) {
//hm

var resultNa16;
var sixteenBase;

if(base % 16 == 0){

  sixteenBase = Math.floor(base / 16);
  resultNa16 = Math.floor(number / sixteenBase) + Math.floor(number / (sixteenBase * sixteenBase)) + Math.floor(number / (sixteenBase * sixteenBase* sixteenBase)) + Math.floor(number / (sixteenBase * sixteenBase * sixteenBase * sixteenBase)) + Math.floor(number / (sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase)) + Math.floor(number / (sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase)) + Math.floor(number / (sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase)) + Math.floor(number / (sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase)) + Math.floor(number / (sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase * sixteenBase));
  return resultNa16;
}
else{
  resultNa16 = 0;
}

var resultNa12;
var twelveBase;
if(base % 12 == 0){

  twelveBase = base / 12;
  resultNa12 = Math.floor(number / twelveBase) + Math.floor(number / (twelveBase * twelveBase)) + Math.floor(number / (twelveBase * twelveBase* twelveBase)) + Math.floor(number / (twelveBase * twelveBase * twelveBase * twelveBase)) + Math.floor(number / (twelveBase * twelveBase * twelveBase * twelveBase * twelveBase)) + Math.floor(number / (twelveBase * twelveBase * twelveBase * twelveBase * twelveBase * twelveBase)) + Math.floor(number / (twelveBase * twelveBase * twelveBase * twelveBase * twelveBase * twelveBase * twelveBase)) + Math.floor(number / (twelveBase * twelveBase * twelveBase * twelveBase * twelveBase * twelveBase * twelveBase * twelveBase)) + Math.floor(number / (twelveBase * twelveBase * twelveBase * twelveBase * twelveBase * twelveBase * twelveBase * twelveBase * twelveBase));
  return resultNa12;
}
else{
  resultNa12 = 0;
}

var resultNa8;
var eightBase;
if(base % 8 == 0){
  
  eightBase = base / 8;
  resultNa8 = Math.floor(number / eightBase) + Math.floor(number / (eightBase * eightBase)) + Math.floor(number / (eightBase * eightBase* eightBase)) + Math.floor(number / (eightBase * eightBase * eightBase * eightBase)) + Math.floor(number / (eightBase * eightBase * eightBase * eightBase * eightBase));
  return resultNa8;
}
else{
  resultNa8 = 0;
}










var halfBase;
if(base % 2 == 0){
  halfBase = base / 2;
}
else{
  halfBase = base;
}

  var result = Math.floor(number / halfBase) + Math.floor(number / (halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase));


// var result2;
// var trBase;
// if(base % 3 == 0){
//   console.log('na 3');
//   trBase = base / 3;
//   result2 = Math.floor(number / trBase) + Math.floor(number / (trBase * trBase))

// }
// else{
//   result2 = 0;
// }

// var result3;
// var quartBase;
// if(base % 4 == 0){
//   console.log('na 4');
//   quartBase = base / 4;
//   result3 = Math.floor(number / quartBase) + Math.floor(number / (quartBase * quartBase));
// }
// else{
//   result3 = 0;
// }


return (result);

}