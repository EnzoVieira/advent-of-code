const fsPromises = require("fs").promises

async function parser() {
  const content = (await fsPromises.readFile("day4/input.txt")).toString()

  return content
}

function doesOverlaps(pair1, pair2) {
  const [pair1L, pair1R] = pair1.split("-")
  const [pair2L, pair2R] = pair2.split("-")

  if ((pair2R - pair1L) * (pair1R - pair2L) >= 0) return 1
}

parser().then((response) => {
  const arr = response.split("\n")

  const pairs = arr.map((line) => line.split(","))

  const pairsFullyContainTheOther = pairs.reduce((acc, pair) => {
    if (doesOverlaps(pair[0], pair[1])) return acc + 1
    return acc
  }, 0)

  console.log(pairsFullyContainTheOther)
})
