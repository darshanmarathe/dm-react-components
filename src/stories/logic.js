function SetAndChangeString(obj, str) {
  const getLastWord = (_str) => {

    const arr = [];
    for (let index = _str.length - 1; index > -1; index--) {
      const element = _str[index];
     
      if (element === " ") {
        return arr.reverse().join("");
      }else{
          arr.push(element)
      }
    }
 
    return arr.reverse().join("");
  };

  const lastword =getLastWord(str);
  if(lastword in obj)
  {
    if(obj[lastword].startsWith("EE:")){
        const evaluated = eval(obj[lastword].replace("EE:" , ""));
        return str.replace(lastword , evaluated)
    }else{

        return str.replace(lastword , obj[lastword])
    }
  }
  else 
   return  str
}

let replacer = {
  hiii: "hi, \n\n\n\n Regards, \n Darshan Marathe",
  hru: 'How are you ?',
  todt : 'EE:new Date()'
};

console.log(SetAndChangeString(replacer, "hiii"));
console.log(SetAndChangeString(replacer, "this is hiii"));
console.log(SetAndChangeString(replacer, "hi, hru"));
console.log(SetAndChangeString(replacer, "today is todt"));