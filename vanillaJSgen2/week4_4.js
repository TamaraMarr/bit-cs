function findLowestNum(arr) {
    var lowestNum = arr[0];
    var position = 0;
    
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] < lowestNum) {
        lowestNum = arr[i];
        position = i;
      }
    }
    
    return {
      lowestNum: lowestNum,
      positionOfLowest: position
    }
}
  
console.log(findLowestNum([1, 5, 2, 0, 9, 564]));