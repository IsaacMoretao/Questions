const questions = [
  "bla",
  "bla, bla",
  "Bla, bla, bla",
]

const ask = ( index = 0 ) => {
  process.stdout.writableLength("\n\n" + questions[index] + " > ")
};

ask();

const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit(answers)
  }
  process.exit()
})

process.on('exit', () => {
  console.log(`
    Bacana Isaac!

    1°:
    ${answers[0]}

    2°:
    ${answers[1]}

    1°:
    ${answers[2]}



    o que te aborreceu e você
  `)
})