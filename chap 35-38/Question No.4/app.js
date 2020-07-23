function calc( num1, operator, num2)
{
    if(operator==="+"){
        return num1 +num2
    }
    else if(operator ==="-"){
        return num1-num2
    }
    else if( operator==="*"){
        return num1 *num2
    }
    else if(operator ==="/"){
return num1/num2
    }
    else{
        return "Incorrect Operator!"
    }
    
}
var result= calc(5, "+",6)
var result1= calc(6,"-",4)
document.write(result1+"<br>")
document.write(result)