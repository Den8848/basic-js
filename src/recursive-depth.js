module.exports = class DepthCalculator {
    calculateDepth(arr) {
      if (Array.isArray(arr)) {
          return 1 + Math.max(...arr.map(getArrayDepth)) 
      } else { 
          return 0
      }
      }
};