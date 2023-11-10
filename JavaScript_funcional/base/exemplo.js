const module = {
  height: 42,
  getComputedHeight: function (height) {
    return this.height + height;
  }
};

const unboundGetComputedHeight = module.getComputedHeight;
console.log(unboundGetComputedHeight(32)); // The function gets invoked at the global scope
// outputs: NaN
// Outputs NaN as this.height is undefined (on scope of window) so does 
// undefined + 32 which returns NaN

const boundGetComputedHeight = unboundGetComputedHeight.bind(module);
console.log(boundGetComputedHeight(32));
// expected output: 74