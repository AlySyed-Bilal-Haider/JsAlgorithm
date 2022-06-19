//write a program, find out som of negative number and count positive number;

var arr=[1,2,3,4,5,6,7,8,9,10,-11,-12,-13,14];
 var count=0;

 if(arr.length>0)
 {
  var sum=0;
  for(var i=0; i<=arr.length-1; i++)
 {
     if(arr[i]>0)
     {
       count++;
      //  return true;
     }
     if(arr[i]<0)
     {
      sum=sum+arr[i];
     }
 }
 console.log("positive number is:"+count);
 console.log("negative number is:"+sum);
 }
