var myArray=[1,2,2,3,3,4,4,4,5,6];
var max=0

var maxArray=myArray[0];
for(var i = 0; i<myArray.length;i++)
{
    var dem =0;
    for(var j = i; j < myArray.length;j++)
    {
        if(myArray[i]===myArray[j])
        {
            dem++;
        }
    }
    if(dem>max)
    {
        max = dem;
        maxArray=myArray[i];
    }
}
console.log(maxArray+" có số lần đếm lớn nhất là: "+max);
