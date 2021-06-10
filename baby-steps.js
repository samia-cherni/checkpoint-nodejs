const newArr=process.argv.slice(2);
const add = newArr.reduce((acc,curr)=>{return acc+ +curr},0);
console.log(add);