/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
 * 
 * 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
 * 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 
 * 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
 * 
 * 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 
 * 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
 * 
 */


/**
 * Code
 */
function solution(progresses, speeds) {
    var answer = [];
    
    let max = 0;
    for(let i=0; i<progresses.length; i++){
        let p = progresses[i];
        let s = speeds[i];
        let r = Math.ceil((100-p) / s);
        if(max < r) {
            answer.push(1);
            max = r;
        }else {
            answer[answer.length-1]++;
        }
    }
    return answer;
}

// ======================================================================================

/**
 * Best Code
 * 
 * 더나은 코드를 찾지 못했다.
 */
