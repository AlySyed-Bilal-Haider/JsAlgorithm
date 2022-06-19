//Given an array X of positive number; using the formula,x[i]>x[j]=x[i]-x[j]; x=[6,9,21];
  
var arr=[6,9,21];
var sum=0;
 for(let i=0; i<arr.length-1; i++)
 {
     for(let j=0; j<arr.length-1; j++)
     {
         if(arr[i]>arr[j])
         {
             arr[i]=arr[i]-arr[j];
             sum=sum+arr[i];
             console.log("arr[i]",arr[i]);
         }
        
     }
 }
 console.log("sum",sum);
