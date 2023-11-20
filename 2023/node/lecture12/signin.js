class Data{
    constructor(){
        this.number_of_people = 0;
        this.highscore_id = null;
        this.personal_data = [];
    }
}

class Personal_data{
    constructor(){
        this.id = 0;
        this.password = null;
        this.personal_best = 0;
        this.playcount = 0;
    }
}

const fs = require('fs');
const dataFilePath = 'userData.json';

// 파일에 데이터 저장
function write_file(filePath, data){
    // 데이터를 JSON 형식의 문자열로 변환
    const jsonData = JSON.stringify(data, null, 2); 
    try{
        fs.writeFileSync(filePath, jsonData);
    }catch(e){
        console.error('파일 저장 중 오류 발생:', e);
    }
}


// 파일에서 데이터 읽어오기
function read_file(filePath){
    let loadedData = null;    
    try{
        let fileData = fs.readFileSync(filePath, 'utf8');
        // JSON 문자열을 JavaScript 객체로 파싱
        loadedData = JSON.parse(fileData);
    }catch(e){
        console.error('파일 읽는 중 오류 발생:', e);
    }
    return loadedData;
}
 
        

function signin(data, id, password){    
    if(dataFilePath != null){        
        data.personal_data.push({
            id,
            password, personal_best:0, playcount:0
        });
        data.number_of_people++;
    }
    return data;
}

var game_data = read_file(dataFilePath);
game_data = signin(game_data, "Hungon", "VRGA");
write_file(dataFilePath, game_data);
