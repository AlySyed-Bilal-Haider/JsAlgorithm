var firstage=new Date('1913/01/01');
var secondage=new Date('2013/01/01');
function ageDifference(a,b){
  var firstyear=a.getFullYear();
  var secondYear=b.getFullYear();
  var differenceYears=secondYear-firstyear;
  console.log(differenceYears);
};

ageDifference(firstage,secondage)