function Palndrome(str){
 const reversed=str.split('').reverse().join('');
 if(reversed===str){
    return true;
 }
 else{
    return false;
 }
}

const str="Bilal";
console.log(Palndrome(str));