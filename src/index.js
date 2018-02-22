module.exports = function getZerosCount(number, base) {
//hm

var result4;
var eightBase;
if(base % 8 == 0){
  console.log('na 8');
  eightBase = base / 8;
  result4 = Math.floor(number / eightBase) + Math.floor(number / (eightBase * eightBase)) + Math.floor(number / (eightBase * eightBase* eightBase)) + Math.floor(number / (eightBase * eightBase * eightBase * eightBase)) + Math.floor(number / (eightBase * eightBase * eightBase * eightBase * eightBase));
  return result4;
}
else{
  result4 = 0;
}



var halfBase;
if(base % 2 == 0){
  halfBase = base / 2;
}
else{
  halfBase = base;
}

  var result = Math.floor(number / halfBase) + Math.floor(number / (halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase));


var result2;
var trBase;
if(base % 3 == 0){
  console.log('na 3');
  trBase = base / 3;
  result2 = Math.floor(number / trBase) + Math.floor(number / (trBase * trBase))

}
else{
  result2 = 0;
}

var result3;
var quartBase;
if(base % 4 == 0){
  console.log('na 4');
  quartBase = base / 4;
  result3 = Math.floor(number / quartBase) + Math.floor(number / (quartBase * quartBase));
}
else{
  result3 = 0;
}


return (result + result2 + result3);

}