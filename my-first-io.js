const fs = require('fs');
const file = fs.readFileSync(process.argv[2]);
const result = file.toString().split('\n').length-1;
console.log(result);