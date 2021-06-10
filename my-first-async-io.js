const fs = require('fs');
const file = fs.readFile(process.argv[2],'utf8',(err,data)=>{
    const result=data.toString().split('\n').length-1;
    if(err){console.error(err);}
    console.log(result);
});
