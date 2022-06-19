var obj={
    a:10,
    b:20,
    c:{
        x:2,
        y:3
    },
    d:{
        z:{
            q:4
        }
    }
};
var randomarr=[];
var arr=[];
for(var key in obj)
{
    arr.push(key);
}

  arr.forEach(element => {
    //    console.log(element);
      const randomnumber=Math.ceil(Math.random()*arr.length-1)
      randomarr.push(arr[randomnumber]);
  });
  console.log(arr);
// console.log(arr[Math.floor(Math.random()*arr.Length)]);
