
 const str=prompt("Enter the string");
 function validtaion(str)
 {
    var len=parseInt(str.length);
    var reg=' /^[a-z0-9]+$/';
    console.log(len);
    if(len>4 && len<25)
    {
        if(!reg.match(str)){
            alert("Enter valied name");
            }
    }
    else{
        alert("Enter correcct lenght");
    }
 }
 console.log(validtaion(str));
