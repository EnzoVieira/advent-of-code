const fsPromises = require("fs").promises

const uppercaseLetters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
const lowercaseLetters = Array.from("abcdefghijklmnopqrstuvwxyz")

async function parser() {
  const content = (await fsPromises.readFile("day3/input.txt")).toString()

  return content
}

parser().then((response) => {
  const arr = response.split("\n")

  const repetitions = arr.map((line) => {
    const firstHalf = line.slice(0, line.length / 2)
    const secondHalf = line.slice(line.length / 2)

    for (let i = 0; i < firstHalf.length; i++) {
      const currentLetter = firstHalf[i]

      if (secondHalf.includes(currentLetter)) return currentLetter
    }
  })

  const test = repetitions.reduce((acc, char) => {
    if (uppercaseLetters.includes(char)) {
      return char.charCodeAt(0) - 65 + 27 + acc
    }

    return char.charCodeAt(0) - 97 + 1 + acc
  }, 0)

  console.log(test)
})
