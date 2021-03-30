module.exports = class DepthCalculator {
    calculateDepth(arr) {
      if (Array.isArray(arr)) {
          return 1 + Math.max(...arr.map(calculateDepth)) 
      } else { 
          return 0
      }
      }
};