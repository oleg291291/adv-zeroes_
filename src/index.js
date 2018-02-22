module.exports = function getZerosCount(number, base) {

var halfBase;
if(base % 2 == 0){
  halfBase = base / 2;
}
else{
  halfBase = base;
}

  var result = Math.floor(number / halfBase) + Math.floor(number / (halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase));
return Math.floor(result);

}