module.exports = function getZerosCount(number, base) {
//


function firstFun(base){
var j = 1;
var i = 2;
  var x = base;
var a = new Array();
do
{
 if (x % i == 0) // "x" - Число, которое нам требуется разложить. Должно задаваться заранее.
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
  
a[j] = i; // В массиве "a" содержатся вычисленные множители.
  return (a[a.length-1]);
}





var halfBase = firstFun(base);


  var result = Math.floor(number / halfBase) + Math.floor(number / (halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase)) + Math.floor(number / (halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase * halfBase));


return (result);

}