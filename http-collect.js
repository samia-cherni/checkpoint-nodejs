const http=require('http');
const url=process.argv[2];
const bl=require('bl');
http.get(url,(response)=>{
    response.pipe(bl((err,data)=>{
        if (err){console.error(err)}
        let result=data.toString()
        console.log(result.length);
        console.log(result);
    }))
})

// http.get(url,(response)=>{
//     let result="";
//     response.setEncoding('utf8');
//     response.on('data',(data)=>{
//         result+=data;
//     })
//     response.on('error',(err)=>{
//         console.log(err);
//     })
//     response.on('end',()=>{
//         console.log(result.length);
//         console.log(result);
//     })
// })