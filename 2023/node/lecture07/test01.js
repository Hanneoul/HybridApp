const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let buffer = ''; // 사용자의 입력을 저장할 버퍼
let bufferResetTimer; // 버퍼 초기화를 위한 타이머

// 사용자가 키를 누를 때마다 버퍼에 추가합니다.
// 사용자가 키를 누를 때마다 버퍼에 추가합니다.
process.stdin.on('keypress', (str, key) => {
    if (key) {
      if (key.name === 'return') { // 사용자가 엔터 키를 누르면 버퍼의 내용을 출력하고 초기화합니다.
        console.log('사용자 입력:', buffer);
        
        buffer = '';
      } else {
        if (key.sequence) {
          // 화살표 키를 특수 문자로 변환
          if (key.sequence === '\u001b[A') {
            buffer += '↑'; // 화살표 위
            
          } else if (key.sequence === '\u001b[B') {
            buffer += '↓'; // 화살표 아래
          } else if (key.sequence === '\u001b[C') {
            buffer += '→'; // 화살표 오른쪽
          } else if (key.sequence === '\u001b[D') {
            buffer += '←'; // 화살표 왼쪽
          }else if (key.sequence === '\u001b[D') {
            buffer += '←'; // 화살표 왼쪽
          }else if (key.sequence === '\u001b[1;5P') {
            buffer += 'P'; // 'p'를 'P'로 변환
          }else if (key.sequence === '\u001b') {
            console.log('프로그램이 종료되었습니다.');
            process.exit(0);
          }else {
            buffer += key.sequence;
          } 
          evaluateInput(buffer);
        }
        else {
          buffer += str;
        }
        // 0.5초 후 버퍼 초기화 타이머 설정 또는 재설정
        clearTimeout(bufferResetTimer);
        bufferResetTimer = setTimeout(resetBuffer, 500);
        }
     }
  });
  
// 버퍼 초기화 함수
function resetBuffer() {
buffer = '';
}

// 입력 패턴을 평가하고 출력을 설정하는 함수
function evaluateInput(input) {
    if (input.includes('↓→p')) {
        output = '아도겐~!';
        console.log('출력:', output);
    } else if (input.includes('←→p')) {
        output = '라데꾸~!';
        console.log('출력:', output);
    }     
}

console.log('프로그램이 실행 중입니다.');
console.log('기술을 입력하면 기술이 나갑니다.');
console.log('엔터를 누르면 입력된 값이 출력됩니다.');
console.log('esc를 누르면 종료됩니다.');