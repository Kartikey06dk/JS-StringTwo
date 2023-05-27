function correctMistake(line, chartobeReplaced, what) {
    // write code here
    // return the output , do not use console.log here
    return line.split(chartobeReplaced).join(what);

}
const rl = require('readline')


const reader = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})


reader.on('line', (line) => {
    const [line1, ch, hc] = line.split(",")


    console.log(correctMistake(line1, ch, hc));


})