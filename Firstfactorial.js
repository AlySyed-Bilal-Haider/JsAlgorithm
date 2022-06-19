//first method
function FirstFactorial(num) { 

  
    var s=1;
    if(num===0)
    {
       return 1;
    }else{
       for(let i=2; i<=num; i++)
       {
         s=s*i;
       }
    }
    return s;
   }
      
   // keep this function call here 
   console.log(FirstFactorial(4));

//    second PaymentMethodChangeEvent, how to find FirstFactorial;

function FirstFactorial(num) { 
    if(num===0)
    {
       return 1;
    }else{
       return num*FirstFactorial(num-1); 
    }
   }
      
   // keep this function call here 
   console.log(FirstFactorial(4));