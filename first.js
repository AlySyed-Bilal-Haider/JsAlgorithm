//First program: write a program enter two string and find out logest commom substring;
    var a="132535365";
    var b="123456789";
  var arr=[];
  function Findcommomsubstring(a,b){
   var c=a.length-1;
  
   for(var i=0; i<=c; i++)
   {
     for(var j=0; j<=c; j++)
     {
         if(a[i]==b[j])
         {
           arr.push(a[i]);
                  }         
     }
   }
  }
  
  Findcommomsubstring(a,b);
  // const result=arr.join("");
//  const result=arr.map((items)=>{
    // console.log(items);
  // })
  // console.log(result);
  // console.log(arr.(','));
  // console.log();
  const arritem=new Set(arr);
  console.log(arritem);
