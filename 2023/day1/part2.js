const { parser } = require("../../utils/parser")

const numbersSpelled = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
]

function checkIsNumberSpelled(line, startIndex) {
  const numbersSpelledStartedWith = numbersSpelled.filter((number) =>
    number.startsWith(line[startIndex])
  )

  if (numbersSpelledStartedWith.length > 0) {
    for (let numberSpelled of numbersSpelledStartedWith) {
      const substring = line.substring(
        startIndex,
        startIndex + numberSpelled.length
      )

      if (substring === numberSpelled) {
        return numbersSpelled.indexOf(numberSpelled) + 1
      }
    }
  }

  return -1
}

parser("2023/day1/input.txt").then((response) => {
  const lines = response.split("\n")

  let acc = 0

  lines.forEach((line) => {
    let firstDigit = null
    let lastDigit = null

    for (let i = 0; i < line.length; i++) {
      const char = line[i]

      if (!isNaN(Number(char))) {
        if (firstDigit === null) {
          firstDigit = char
          lastDigit = char
        } else {
          lastDigit = char
        }
      } else {
        const r = checkIsNumberSpelled(line, i)
        if (r !== -1) {
          if (firstDigit === null) {
            firstDigit = String(r)
            lastDigit = String(r)
          } else {
            lastDigit = String(r)
          }
        }
      }
    }

    acc += Number(firstDigit + lastDigit)
  })

  console.log(acc)
})
