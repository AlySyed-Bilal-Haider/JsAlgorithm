//write a program to , write function, set and gets values in specied path;

let staff={};
var a='morestaff.name';
  function namespace(stuff,propertyname,values=undefined){
      stuff[propertyname]=values;
      return stuff;
  };
  const getvalue=namespace(staff,a);
  console.log(getvalue)