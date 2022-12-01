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
  let top2 = 0
  let top3 = 0

  arr2.forEach((elf) => {
    const sumOfElf = elf.reduce((acc, curr) => acc + parseInt(curr), 0)

    if (sumOfElf >= top1) {
      const top1Tmp = top1
      const top2Tmp = top2

      top1 = sumOfElf
      top2 = top1Tmp
      top3 = top2Tmp
    } else if (sumOfElf >= top2) {
      const top2Tmp = top2

      top2 = sumOfElf
      top3 = top2Tmp
    } else if (sumOfElf >= top3) {
      top3 = sumOfElf
    }
  })

  console.log(top1, top2, top3)
  console.log(top1 + top2 + top3)
})
