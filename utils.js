function readString() {
  const rl = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    })

  return new Promise(resolve => {
    rl.on('line', data => {
      resolve(data)
      rl.close()
    })
  })
}

function readNumber() {
  return readString().then(data => Number(data))
}

module.exports = { 
  readNumber,
  readString
}