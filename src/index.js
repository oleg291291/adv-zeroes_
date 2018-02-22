module.exports = function getZerosCount(number, base) {
//hm

var resultNa7;
var sevenBase;
if(base % 12 == 0){
  
  sevenBase = base / 12;
  resultNa7 = Math.floor(number / sevenBase) + Math.floor(number / (sevenBase * sevenBase)) + Math.floor(number / (sevenBase * sevenBase* sevenBase)) + Math.floor(number / (sevenBase * sevenBase * sevenBase * sevenBase)) + Math.floor(number / (sevenBase * sevenBase * sevenBase * sevenBase * sevenBase));
  return resultNa7;
}
else{
  resultNa7 = 0;
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