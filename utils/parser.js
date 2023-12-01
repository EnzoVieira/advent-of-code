const { promises } = require("fs")

async function parser(path) {
  const content = (await promises.readFile(path)).toString()

  return content
}

module.exports = { parser }
