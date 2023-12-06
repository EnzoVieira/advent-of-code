const { parser } = require("../../utils/parser")

parser("2023/day6/input.txt").then((response) => {
  const [timesString, distancesString] = response.split("\n")

  const times = timesString
    .split(" ")
    .filter((part, index) => index > 0 && part !== "")
    .map(Number)

  const distances = distancesString
    .split(" ")
    .filter((part, index) => index > 0 && part !== "")
    .map(Number)

  let marginOfError = 1

  for (let i = 0; i < times.length; i++) {
    let possible = 0

    for (
      let timeHoldingTheButton = 0;
      timeHoldingTheButton <= times[i];
      timeHoldingTheButton++
    ) {
      const timeTraveling = times[i] - timeHoldingTheButton
      const boatSpeed = timeHoldingTheButton

      const boatWillMove = boatSpeed * timeTraveling

      if (boatWillMove > distances[i]) possible++
    }

    marginOfError *= possible
  }

  console.log(marginOfError)
})
