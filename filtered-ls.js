const fs = require('fs');
const path=require('path');
const directory=process.argv[2];
const extension=`.${process.argv[3]}`;
const files=fs.readdir(directory,(err,data)=>{
    if(err){console.error(err)}
    data.forEach(el=>{if(path.extname(el)===extension){
        console.log(el)
    }})
})