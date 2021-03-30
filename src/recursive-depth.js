module.exports = class DepthCalculator {
    calculateDepth(arr){
      let levels = 1;
      let prevLen = 1;
      let currLen = arr.length;
    
      while(currLen > prevLen){
        arr = arr.flat();
        prevLen = currLen
        currLen = arr.length;
        levels++
      }
      return levels;
    }
};

// const depthCalc = new DepthCalculator();
// depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
// depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
// depthCalc.calculateDepth([[[]]]) => 3