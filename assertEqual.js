const assertEqual = function(actual, expected) {
  // If actual is equal to expected then we would want to print assertion passed otherwise print assertion failed
  if (actual === expected) {
    console.log(`Assertion passed! ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed! ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse labs", "Bootcamp");
