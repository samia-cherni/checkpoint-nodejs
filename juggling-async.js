const http=require('http');
const bl=require('bl');
const urls=process.argv.slice(2);

let output=[];
let count=0;
const printOutput=()=>{
    for (let i = 0; i < 3; i++) {
        console.log(output[i]);
    }
}
const getUrl=(index)=>{
    http.get(urls[index],(response)=>{
        response.pipe(bl((err,data)=>{
            if (err){console.error(err)}
            output[index]=data.toString();
            count++
            if(count===3){printOutput()}
        }))
    })
}
for (let i = 0; i < 3; i++) {
    getUrl(i);
}