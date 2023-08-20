const countValue = document.querySelector('#counter');  //COUNTER --> ID

const increment =  function inc(){
    // countValue mai jo bhi text hai vo innerhtml ke throgh hme mil jaega but in the form of string
      // hme number ke form mai chahie--> use parseInt
      // get the value from UI
    let value = parseInt(countValue.innerText);
    // updated value
    value = value+1;
    // updated value ko vps UI mai dalna hai
    // set the value onto UI
    countValue.innerHTML = value;
  };


  const decrement = function dec(){
    // get the value
    let value = parseInt(countValue.innerText);
    // update the value
    value = value -1;
    // set the value
    countValue.innerHTML = value;
  }