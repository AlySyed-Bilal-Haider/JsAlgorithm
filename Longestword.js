function reverse(str){
    const newstr=str.split(' ');
    var arr=[];
     newstr.forEach(element => {
          arr.push(element.length);
     });
     console.log(Math.max(...arr));
  
  }
  reverse("I Love Code");