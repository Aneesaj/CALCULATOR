const num=document.getElementById("num")

function appendNum(input)
{
  num.value+=input;
}

function allclear()
{
    num.value=''
}

function clear()
{
    num.value = num.value.slice(0,-1);
}

function add(a,b)
{
    return a+b;
}

function sub(a,b)
{
    return a-b;
}

function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    if(b==0)
    {
        throw new Error("Division by zero is not allowed")
    }
    return a/b;
}
function calculate() {
    const num = document.getElementById('num');
    const expression = num.value;
    
    try {
        const result = evaluateExpression(expression);
        num.value = result;
    }
    catch(error)
{
    num.value="Error";
}
}
function evaluateExpression(expression) {
    let result;
    
    if (expression.includes('+')) 
    {
        const [a, b] = expression.split('+').map(Number);
        result = add(a, b);
    } 
    else if (expression.includes('-')) 
    {
        const [a, b] = expression.split('-').map(Number);
        result = sub(a, b);
    } 
    else if (expression.includes('*')) 
    {
        const [a, b] = expression.split('*').map(Number);
        result = mul(a, b);
    } 
    else if (expression.includes('/')) 
    {
        const [a, b] = expression.split('/').map(Number);
        result = div(a, b);
    } 
    else 
    {
        result = parseFloat(expression);
    }
    
    return result;
}
