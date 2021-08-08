// const add0 = (num1, num2) => num1 + num2

// const add1 = (num1) => {
//   return (num2) => {
//     return num1 + num2
//   }
// }

/**
 * Question: How would you make this work?
    add(2, 5); // 7
    add(2)(5); // 7
 */
const add2 = (num1, num2) => {
  if (num2) {
    return num1 + num2
  } else {
    return (separateNum2) => {
      return num1 + separateNum2
    }}
}