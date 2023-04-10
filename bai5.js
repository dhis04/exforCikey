var myArray = [0,2,5,9]

function Targets(arr,tgt)
{
    var a=0;
    var b=0;
    for(var i=0;i<arr.length;i++)
    {
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i]+arr[j]===tgt)
            {
                a=i;
                b=j;
            }
            // else{
            //  return a=null , b=null;
             
            // }
        }
    }
    if(b===0)
    {
        return "không có nghiệm thỏa mãn";
    }
    else
    {
        return a+" "+b;
    }
}
var k = Targets(myArray,9);
console.log(k);