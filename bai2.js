function Uoc(a,b)
{
  while(b!=0)
  {
    var r = a%b;
    a=b;
    b=r;
  }
  return a ;
 
}
function Boi(a,b)
{
    return "Bội chung lớn nhất là: "+a*b/Uoc(a,b)+" Ước chung lớn nhất là:" +Uoc(a,b);
}
var k =Boi(2,4);
console.log(k);