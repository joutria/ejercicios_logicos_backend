function isSpecialArray (specialArr) {
  let special=0;
  specialArr.map((value, index)=>{ 
    if ((value % 2 == 0 && index % 2 == 0)||value % 2 == 1 && index % 2 == 1){
      special++;
    }
  })
  return special==specialArr.length;
}

module.exports = isSpecialArray;