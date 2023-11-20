/*
{ 
    number_of_people :
    highscore_id :
    personal_data : [
        {
            id :
            password :
            personal_best :
            playcount :
        },
        {
            id :
            password :
            personal_best :
            playcount :
        }
    ]
}
*/
const fs = require('fs');
const filePath = 'userData.json';

var data = {
    number_of_people: 3,
    highscore_id: 'engineering_sister',
    personal_data: [
      {
        id: 'elflee',
        password: 'VRGA',
        personal_best: 1000,
        playcount: 50
      },
      {
        id: 'engineering_sister',
        password: 'VRGA',
        personal_best: 1200,
        playcount: 40
      },
      {
        id: 'kyc0725',
        password: 'CSE',
        personal_best: 200,
        playcount: 20
      }
    ]
  };

// 데이터를 JSON 형식의 문자열로 변환
const jsonData = JSON.stringify(data, null, 2);

// 파일에 데이터 저장
try{
  fs.writeFileSync(filePath, jsonData);
}catch(e){
  console.error('파일 저장 중 오류 발생:', e);
}

// 파일에서 데이터 읽어오기
try{
  var fileData = fs.readFileSync(filePath, 'utf8');
  // JSON 문자열을 JavaScript 객체로 파싱
  var loadedData = JSON.parse(fileData);

  for(let i=0;i<loadedData.number_of_people;i++){
      if(loadedData.personal_data[i].id == loadedData.highscore_id)
          console.log("최고기록:"+loadedData.personal_data[i].personal_best);
  }    
}catch(e){
  console.error('파일 읽는 중 오류 발생:', e);
}

    