//How to check prime number or not;
function isPrime(num){
    if(num<2){
        return false;
    }
    else{
        for(let i=2; i<num; i++){
            if(num%2==0){
                return false;
            }
            else{
                return true;
            }
        }
    }
}
const n=parseInt(prompt("Enter a number "));
 const p=isPrime(n);
 console.log("prime number or not=",p);