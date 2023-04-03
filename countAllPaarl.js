function countAllPaarl(regNo){
let regList = regNo.split(',');
  let count = 0;
  for (let i=0;i<regList.length;i++){
    let regPaarl = regList[i].trim();
    if (regPaarl.startsWith('CJ')){
      count ++
  
  }
}return count;
}