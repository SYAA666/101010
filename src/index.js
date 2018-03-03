module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) {return 0}
  var unique = new Set();
  var maximalSequence = 1;
  array.forEach((number) => {
      unique.add(number);
  })
  for (let i = 0; i < array.length; i++) {
      if (unique.has(array[i] +1)) {
          let sequence = array[i]+1;
          let sequenceLength = 2;
          while (unique.has(sequence+1)) {
              sequenceLength++;
              sequence++;
          }
          if (sequenceLength > maximalSequence) {maximalSequence = sequenceLength}
      }
  }
  return maximalSequence;
}
