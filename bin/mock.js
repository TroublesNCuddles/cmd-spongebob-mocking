#!/usr/bin/env node
/*
 *
 *  REQUIREMENTS
 *
 */

const {mockInput} = require('../src/index.js');

//Avoiding the new line from console.log, and add in error handling for FanCyNEsS
return process.stdout.write(mockInput(process.argv.slice(2).join(' ')), (err => {
    if (err) {
        console.error(err);

        process.exit(1);
    }
}));