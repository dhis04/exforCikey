function checkNum(num)
{
  if(num<0)
  {
    return false;
  }
  else
  {
    var k = parseInt(num.toString().split('').reverse().join(''));
    if(k===num)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
var a = checkNum(12);
console.log(a);