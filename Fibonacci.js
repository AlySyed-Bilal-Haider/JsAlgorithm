//Fibonacci series;
var a=0,b=1,s=0;
for(let i=0; i<=4; i++)
{
 s=a+b;
 a=b;
 b=s;
 console.log(s);
}