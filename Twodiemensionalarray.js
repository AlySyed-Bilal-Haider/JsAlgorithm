//XD-array for dimmies; Write a function,accept three arguments,first is arrar,second is lenght of array;

  function Xdmultidimensionalarray(a,b,c,value){
      var arr=[];
      for(var k=0; k<c; k++)
      {
      for(var i=0; i<a; i++)
      {
          arr[i]=[];
          for(var j=0; j<b; j++){
              arr[i][j]=value;
              console.log(arr[i][j]);
          }
      }
  }}

  const a=Xdmultidimensionalarray(2,2,2,'x');
  console.log(a);