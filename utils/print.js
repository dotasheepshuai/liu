module.exports = {
  print
}

function print(something, count = 1) {
  for (let i = 0; i < count; i++) {
    console.log(something);
  }
}