/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
 * 
 * 문제요약
 * 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 
 * 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 
 * 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,
 * arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
 * arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
 * 
 */


/**
 * Code
 */
function solution(arr) {
    var answer = [arr[0]];
    
    for(let i=1; i<arr.length; i++)   {
        answer[answer.length-1] != arr[i] ? answer.push(arr[i]) : ''
    }
    
    return answer;
}


// ======================================================================================

/**
 * Best Code
 */
function solution(arr){
    return arr.filter((val,index) => val != arr[index+1]);
}