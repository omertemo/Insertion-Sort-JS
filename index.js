const randomArray = [22,27,16,2,18,6];

function insertionSort(inputArray){
  for (let index = 1; index < inputArray.length; index++) {
    let current = inputArray[index];
    let pre = index - 1;
    while( (pre > -1) && (current < inputArray[pre])){
      inputArray[index] = inputArray[pre];
      pre--;
    }
    inputArray[pre+1] = current;
    console.log(inputArray);
  }
}

insertionSort(randomArray)
