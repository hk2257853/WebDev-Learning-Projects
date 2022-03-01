// Quick read https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/amp/
document.write("");

document.write("Map eg. See in colsole <br>");
const num = [1, 2, 3, 4];
const doubled = num.map((item) => item * 2);
console.log(doubled);

document.write("Alert... commented for now <br>");
//alert("Done");

document.write("filtered eg. See in colsole <br>");
const filtered = num.filter((item) => item % 2 == 0);
console.log(filtered);

// reduce
document.write("reduced eg. See in colsole <br>");
const sum = num.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);
