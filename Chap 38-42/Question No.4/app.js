function average(sub1, sub2 ,sub3)
{
    var avg= (sub1+sub2+sub3)/3;
    return avg;
}
var b= average(98,65,76)
document.write("Average: "+b)
function percentage(sub1, sub2, sub3)
{
    var total=((sub1+sub2+sub3)/300)*100;
    return total;

}
var a= percentage(98,65,76)
document.write("Percentage: "+a)
function main(){
    average();
    percentage();
}