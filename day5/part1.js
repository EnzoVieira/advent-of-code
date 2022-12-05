const stack1 = ["G", "T", "R", "W"]
const stack2 = ["G", "C", "H", "P", "M", "S", "V", "W"]
const stack3 = ["C", "L", "T", "S", "G", "M"]
const stack4 = ["J", "H", "D", "M", "W", "R", "F"]
const stack5 = ["P", "Q", "L", "H", "S", "W", "F", "J"]
const stack6 = ["P", "J", "D", "N", "F", "M", "S"]
const stack7 = ["Z", "B", "D", "F", "G", "C", "S", "J"]
const stack8 = ["R", "T", "B"]
const stack9 = ["H", "N", "W", "L", "C"]

const stacks = [
  stack1,
  stack2,
  stack3,
  stack4,
  stack5,
  stack6,
  stack7,
  stack8,
  stack9,
]

const fsPromises = require("fs").promises

async function parser() {
  const content = (await fsPromises.readFile("day5/input.txt")).toString()

  return content
}

// move X from Y to Z
function parseIntruction(instruction) {
  const quantity = instruction[1]
  const fromStackNum = instruction[3]
  const toStackNum = instruction[5]

  for (let i = 0; i < quantity; i++) {
    const fromStack = stacks[fromStackNum - 1]
    const toStack = stacks[toStackNum - 1]

    toStack.push(fromStack.pop())
  }
}

parser().then((response) => {
  const input = response.split("\n").map((line) => line.split(" "))

  input.map((instruction) => parseIntruction(instruction))

  const r = stacks.map((stack) => stack.pop())
  console.log(r.join())
})
