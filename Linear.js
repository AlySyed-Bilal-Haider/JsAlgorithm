 
   var a=[2,5,9,10,15];
   var len=a.length();
   let loc=-1;
   var item=prompt("Enter the items");
  let i=0;
  if(item==="")
  {
           console.log("Enter correct");;
   }else{
        item=parseInt(item);
        while(i<len-1 && a[i]!=item)
        {
            i++;
        }
        if(a[i]==item)
        {
            console.log("succesfully find");
            loc++;
        } 
        else{
            console.log("Not found");
         }}
