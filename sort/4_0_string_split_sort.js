/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/120850?language=javascript
 * 
 * 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, 
 * my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 
 * return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
 * 0 < my_string 길이 < 100
 * 
 */


/**
 * Code
 */
function solution(my_string) {
    var answer = my_string.toLowerCase().split('').sort().join('');
    return answer;
}


// ======================================================================================

/**
 * Best Code
 * 
 * 더 나은 코드를 찾지못함.
 */

