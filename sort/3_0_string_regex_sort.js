/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/120880?language=javascript
 * 
 * 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 
 * 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
 * 
 * 제한사항
 * 1 ≤ my_string의 길이 ≤ 100
 * my_string에는 숫자가 한 개 이상 포함되어 있습니다.
 * my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. - - -
 * 입출력 예
 * my_string	result
 * "hi12392"	[1, 2, 2, 3, 9]
 * "p2o4i8gj2"	[2, 2, 4, 8]
 * "abcde0"	[0]
 * 
 */


/**
 * Code
 */
function solution(my_string) {
    return my_string.replace(/[a-z]/g, '').split('').sort().map(a=>Number(a));
}


// ======================================================================================

/**
 * Best Code
 * 
 * 더 나은 코드를 찾지못함.
 */
