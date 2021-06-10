const fs=require('fs');
const path=require('path');

module.exports=(directory,extension,callback)=>{
    extension=`.${extension}`;
    fs.readdir(directory,(err,list)=>{
        if(err){return callback(err)}
        const newList=list.filter(el=> path.extname(el)===extension);
        return callback(null,newList)
    })
}