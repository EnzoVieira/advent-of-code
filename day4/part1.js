const fsPromises = require("fs").promises

async function parser() {
  const content = (await fsPromises.readFile("day4/input.txt")).toString()

  return content
}

function isContainedInRange(pair1, pair2) {
  // 2-8 fully contains 3-7
  // and 6-6 is fully contained by 4-6

  const [pair1L, pair1R] = pair1.split("-")
  const [pair2L, pair2R] = pair2.split("-")

  // pair1 contain pair2
  if (
    parseInt(pair1L) <= parseInt(pair2L) &&
    parseInt(pair1R) >= parseInt(pair2R)
  )
    return 1
  // pair2 contain pair1
  if (
    parseInt(pair2L) <= parseInt(pair1L) &&
    parseInt(pair2R) >= parseInt(pair1R)
  )
    return 1
}

parser().then((response) => {
  const arr = response.split("\n")

  const pairs = arr.map((line) => line.split(","))

  const pairsFullyContainTheOther = pairs.reduce((acc, pair) => {
    if (isContainedInRange(pair[0], pair[1])) return acc + 1
    return acc
  }, 0)

  console.log(pairsFullyContainTheOther)
})
