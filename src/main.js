const { welcome, goodbye, tell } = require("../utils/fortune-teller");

// function ask(question) {
//   return tell(question).then((response) => [
//     `Your question was: ${question}`,
//     `Your fortune is: ${response}`,
//   ]);
// }

function getFortune(question) {
  const tellPromise = tell(question)
    return tellPromise 
      .then((answer) => [
        `Your question was: ${question}`,
        `Your fortune is: ${answer}`,
      ])
      .catch((error) => `There was an error: ${error}`)
}

function fullSession(question) {
  const welcomePromise = welcome();
  return welcomePromise
    .then((message) => getFortune(question)
    .then((fortune) => [message].concat(fortune)
    ))
    .then((bye) => goodbye()
    .then((goodbyeMessage) => bye.concat(goodbyeMessage)
    ))
    .catch((error) => `There was an error: ${error}`)
}

fullSession("What is going on?")

module.exports = { getFortune, fullSession };
