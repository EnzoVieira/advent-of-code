const { parser } = require("../../utils/parser")

parser("2023/day1/input.txt").then((response) => {
  const lines = response.split("\n")

  let acc = 0

  lines.forEach((line) => {
    let firstDigit = null
    let lastDigit = null

    for (let char of line) {
      if (!isNaN(Number(char))) {
        if (firstDigit === null) {
          firstDigit = char
          lastDigit = char
        } else {
          lastDigit = char
        }
      }
    }

    acc += Number(firstDigit + lastDigit)
  })

  console.log(acc)
})
