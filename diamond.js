// drive code file
const controller = require('./controller');

const input = process.argv.at(-1);

const toPrint = controller(input);


for (const e of toPrint) {
    console.log(e)
}


