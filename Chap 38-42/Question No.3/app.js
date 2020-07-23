var s;
var ar;
function forS(a,b,c)
{
    s= (a+b+c)/2;
    ar=s*(s-a)*(s-b)*(s-c);
    return ar;
}
var val=forS(2,3,4);
document.write("Area: "+val)
