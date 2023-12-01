const fsPromises = require("fs").promises

const uppercaseLetters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
const lowercaseLetters = Array.from("abcdefghijklmnopqrstuvwxyz")

async function parser() {
  const content = (await fsPromises.readFile("day3/input.txt")).toString()

  return content
}

function itemInCommon(group) {
  const [rucksacksA, rucksacksB, rucksacksC] = group

  for (let i = 0; i < rucksacksA.length; i++) {
    const currentChar = rucksacksA[i]
    if (rucksacksB.includes(currentChar) && rucksacksC.includes(currentChar))
      return currentChar
  }
}

parser().then((response) => {
  const arr = response.split("\n")

  // Divides the array in groups of 3
  const threeElfGroups = arr.reduce((acc, line, index) => {
    if (index % 3 === 0) {
      acc.push([line])
    } else {
      acc[Math.floor(index / 3)].push(line)
    }

    return acc
  }, [])

  const items = threeElfGroups.map((group) => itemInCommon(group))

  const sum = items.reduce((acc, char) => {
    if (uppercaseLetters.includes(char)) {
      return char.charCodeAt(0) - 65 + 27 + acc
    }

    return char.charCodeAt(0) - 97 + 1 + acc
  }, 0)

  console.log(sum)
})
