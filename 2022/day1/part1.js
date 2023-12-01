const fsPromises = require("fs").promises

async function parser() {
  const content = await (await fsPromises.readFile("day1/input.txt")).toString()

  return content
}

parser().then((response) => {
  const arr = response.replaceAll("\n", " ").split(" ")

  let reduceIndex = 0
  const arr2 = arr.reduce((accumulator, currentValue) => {
    if (currentValue !== "") {
      if (!accumulator[reduceIndex]) {
        accumulator.push([currentValue])
      } else {
        accumulator[reduceIndex].push(currentValue)
      }
    } else {
      reduceIndex++
    }

    return accumulator
  }, [])

  let top1 = 0

  arr2.forEach((elf) => {
    const sumOfElf = elf.reduce((acc, curr) => acc + parseInt(curr), 0)

    if (sumOfElf >= top1) {
      top1 = sumOfElf
    }
  })

  console.log(top1)
})
