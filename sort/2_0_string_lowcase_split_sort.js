/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/120911?language=javascript
 * 
 * 문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 배열을 
 * 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 
 * 단, 빈 문자열은 반환할 배열에 넣지 않습니다.
 * 
 * 제한사항
 * 1 ≤ myString ≤ 100,000
 * myString은 알파벳 소문자로 이루어진 문자열입니다.
 * 
 */


/**
 * Code
 */
function solution(myString) {
    var answer = myString.split('x').filter(a=>a!='').sort();
    return answer;
}



// ======================================================================================

/**
 * Best Code
 * 
 * 더 나은 코드를 찾지못함.
 */

