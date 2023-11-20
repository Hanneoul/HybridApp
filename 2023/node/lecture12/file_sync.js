const fs = require('node:fs');
const filePath = "love.txt";

try{
    fs.writeFileSync(filePath, "송우근");
    fs.appendFileSync(filePath, "♥")
    fs.appendFileSync(filePath, "김영철")
    var data = fs.readFileSync(filePath, 'utf8');
    fs.unlinkSync(filePath);
    
    console.log("읽어온 data:"+data);
    
}catch(e){
    console.error("Error!!!!!!!",e);
}
