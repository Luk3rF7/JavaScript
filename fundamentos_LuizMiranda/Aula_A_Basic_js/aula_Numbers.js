let num1= 1; // int
let num2 = 2.5; //float

console.log(num1+num2); 
// --------------------------------------------------------------------------------------
console.log(num1.toString() + num2) //convertendo em string
//--------------------------------------------------------------------------------------
console.log(num1.toFixed(2)) //Arendodamento = toFixed() caso num1 = 10.5784984878746 
//---------------------------------------------------------------------------------------
console.log(Number.isInteger(nun1)) //isInteger() sabe se num e inteiro
//-----------------------------------------------------------------------------------------------
console.log(Number.isNaN(temp)) // invalido returna true / false
//---------------------------------------------------------------------
 //IEEE 742-2008
 let num3 = 0.7
 let num4 =0.1 

 num3 += num4 // 0.8
 num3 += num4 //0.9
 num3 += num4 //1.0

 //outro modo  de resolver problema

 num3 = (num3 * 100) + (num4 * 100) / 100;
 //resolvendo problema
 num3 = parseFloat(num3.toFixed(2)) //posso usar tbm Number
 console.log(num3)
