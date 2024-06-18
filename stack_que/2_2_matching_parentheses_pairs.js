/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
 * 
 * 문제요약
 * 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 
 * 예를 들어
 * "()()" 또는 "(())()" 는 올바른 괄호입니다.
 * ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
 * '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 
 * 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
 * 
 */


/**
 * Code
 */
function solution(s){

    let check = 0;
    
    for(i of s){
        i == '(' ? check++ : check--;
        if(check < 0) return false;
    }

    return check == 0 ? true : false;
}


// ======================================================================================

/**
 * Best Code
 * 
 * 베스트 코드와 같다.
 */
