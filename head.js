const assertEqual = function(actual, expected) {
    // If actual is equal to expected then we would want to print assertion passed otherwise print assertion failed
    if (actual === expected) {
      console.log(`Assertion passed! ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion failed! ${actual} !== ${expected}`);
    }
  };
  assertEqual("Lighthouse labs", "Bootcamp");
  const head = (arr) => {
    if (arr.length == 0 ) {
      return undefined
    
    } else {
      return arr[0]
    }
  }
  
  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");