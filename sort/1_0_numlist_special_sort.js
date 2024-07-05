/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/120880?language=javascript
 * 
 * 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 
 * 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 
 * 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 
 * 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 1 ≤ n ≤ 10,000
 * 1 ≤ numlist의 원소 ≤ 10,000
 * 1 ≤ numlist의 길이 ≤ 100
 * numlist는 중복된 원소를 갖지 않습니다.
 * 
 */


/**
 * Code
 */
function solution(numlist, n) {
    return numlist.sort((a,b)=>{
        let cc = b-a > 0 ? -1 : 0;
        let ca = Math.abs(n-a);
        let cb = Math.abs(n-b) + cc;
        return cb - ca
    }).reverse();
}


// ======================================================================================

/**
 * Best Code
 * 
 */
function solution(numlist, n){
    return numlist.sort((a,b)=>{
        return Math.abs(a - n) - Math.abs(b - n) || b - n
    })
}

