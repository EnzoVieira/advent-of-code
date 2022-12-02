const fsPromises = require("fs").promises

async function parser() {
  const content = (await fsPromises.readFile("day2/input.txt")).toString()

  return content
}

const shapesPlayerA = ["A", "B", "C"]
// X means you need to lose,
// Y means you need to draw,
// Z means you need to win
const shapesPlayerB = ["X", "Y", "Z"]

const gameCases = {
  A: {
    X: "draw",
    Y: "win",
    Z: "lose",
  },
  B: {
    X: "lose",
    Y: "draw",
    Z: "win",
  },
  C: {
    X: "win",
    Y: "lose",
    Z: "draw",
  },
}

function points(gameCase, shape) {
  let sumPoints = 0

  switch (gameCase) {
    case "lose":
      sumPoints += 0
      break
    case "draw":
      sumPoints += 3
      break
    case "win":
      sumPoints += 6
      break
  }

  switch (shape) {
    case "X":
      sumPoints += 1
      break
    case "Y":
      sumPoints += 2
      break
    case "Z":
      sumPoints += 3
      break
  }

  return sumPoints
}

function chooseLose(shapeChosen) {
  switch (shapeChosen) {
    case "A":
      return "Z"
    case "B":
      return "X"
    case "C":
      return "Y"
  }
}

function chooseDraw(shapeChosen) {
  const indexChosen = shapesPlayerA.indexOf(shapeChosen)

  return shapesPlayerB[indexChosen]
}

function chooseWin(shapeChosen) {
  switch (shapeChosen) {
    case "A":
      return "Y"
    case "B":
      return "Z"
    case "C":
      return "X"
  }
}

function whatINeed(playerA, playerB) {
  switch (playerB) {
    case "X":
      return chooseLose(playerA)
    case "Y":
      return chooseDraw(playerA)
    case "Z":
      return chooseWin(playerA)
  }
}

parser().then((response) => {
  const arr = response.split("\n")

  const allResults = arr.map((game) => {
    const [a, b] = game.split(" ")

    const weNeed = whatINeed(a, b)
    const gameCase = gameCases[a][weNeed]

    return points(gameCase, weNeed)
  })

  const sum = allResults.reduce((acc, curr) => acc + curr, 0)

  console.log(sum)
})
