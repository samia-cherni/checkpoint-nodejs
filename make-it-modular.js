const filterModule=require('./mymodule')
const dir=process.argv[2];
const ext=process.argv[3];
filterModule(dir,ext,(err,data)=>{
    if(err){console.error(err)}
    data.forEach(el=>{
        console.log(el)
    })
})