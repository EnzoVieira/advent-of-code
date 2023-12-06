const { parser } = require("../../utils/parser")

parser("2023/day6/input.txt").then((response) => {
  const [timesString, distancesString] = response.split("\n")

  const timeInString = timesString
    .split(" ")
    .filter((part, index) => index > 0 && part !== "")
    .join("")

  const distanceInString = distancesString
    .split(" ")
    .filter((part, index) => index > 0 && part !== "")
    .join("")

  const timeNumber = Number(timeInString)
  const distanceNumber = Number(distanceInString)

  let possible = 0

  for (
    let timeHoldingTheButton = 14;
    timeHoldingTheButton <= timeNumber - 14;
    timeHoldingTheButton++
  ) {
    const timeTraveling = timeNumber - timeHoldingTheButton
    const boatSpeed = timeHoldingTheButton

    const boatWillMove = boatSpeed * timeTraveling

    if (boatWillMove > distanceNumber) possible++
  }

  console.log(possible)
})
