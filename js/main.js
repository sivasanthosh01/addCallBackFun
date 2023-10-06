let value1=parseInt(prompt("Enter the 1st Number"));
let value2=parseInt(prompt("Enter the 2nd Number"));
document.write(`value1 = ${value1}
                value2 = ${value2} <br><br>`)

let operation=(a,b,ans)=>{
    ans(a,b)
}
let sum=(value1,value2)=>{
    let result=value1+value2;
    document.write(`The Sum of Value1 and Value2 is ${result}`)
}
operation(value1,value2,sum);

