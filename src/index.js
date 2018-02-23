module.exports = function getZerosCount(number, base) {
//


function firstFun(base){
var j = 1;
var i = 2;
  var x = base;
var a = new Array();
do
{
 if (x % i == 0)
 {
  a[j] = i;
  j++;
  x = x / i;
 }
 else
 {
  i++;
 }
}
while (i < x);
  
a[j] = i;
  return (a[a.length-1]);
}




var halfBase = firstFun(base);


  var result = Math.floor(number / halfBase) + Math.floor(number / (halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase));


return (result);

}