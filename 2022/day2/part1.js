const fsPromises = require("fs").promises

async function parser() {
  const content = (await fsPromises.readFile("day2/input.txt")).toString()

  return content
}

const shapesPlayerA = ["A", "B", "C"]
const shapesPlayerB = ["X", "Y", "Z"]

parser().then((response) => {
  const arr = response.split("\n")

  const allResults = arr.map((game) => {
    const [a, b] = game.split(" ")

    const indexOfA = shapesPlayerA.indexOf(a)
    const indexOfB = shapesPlayerB.indexOf(b)

    if (indexOfA == indexOfB) {
      return 3 + indexOfB + 1
    }

    // Player A = Pedra
    if (indexOfA === 0) {
      if (indexOfB === 1) {
        return 6 + indexOfB + 1
      } else {
        return 0 + indexOfB + 1
      }
    }

    // Player A = Papel
    if (indexOfA === 1) {
      if (indexOfB === 2) {
        return 6 + indexOfB + 1
      } else {
        return 0 + indexOfB + 1
      }
    }

    // Player A = Tesoura
    if (indexOfA === 2) {
      if (indexOfB === 0) {
        return 6 + indexOfB + 1
      } else {
        return 0 + indexOfB + 1
      }
    }
  })

  const sum = allResults.reduce((acc, curr) => acc + curr, 0)

  console.log(sum)
})
