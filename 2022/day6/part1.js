const fsPromises = require("fs").promises

async function parser() {
  const content = (await fsPromises.readFile("day6/input.txt")).toString()

  return content
}

function isCharRepeated(string) {
  for (let i = 0; i < 3; i++) {
    const offset = string.slice(i + 1)
    const currentChar = string[i]

    if (offset.includes(currentChar)) return 1
  }

  return 0
}

parser().then((input) => {
  for (let i = 4; i < input.length - 4; i++) {
    const slice = input.slice(i - 4, i)
    if (!isCharRepeated(slice)) {
      console.log(i)
      break
    }
  }
})
