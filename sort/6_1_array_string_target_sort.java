/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
 * 
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
 * 
 * 제한 조건
 * strings는 길이 1 이상, 50이하인 배열입니다.
 * strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
 * strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
 * 모든 strings의 원소의 길이는 n보다 큽니다.
 * 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
 * 입출력 예
 * strings	n	return
 * ["sun", "bed", "car"]	1	["car", "bed", "sun"]
 * ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]
 * 
 */


/**
 * Code
 */
import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public String[] solution(String[] strings, int n) {
        
        Arrays.sort(strings, new Comparator<String>(){
            @Override
			public int compare(String o1, String o2) {
                int result = Character.compare(o1.charAt(n), o2.charAt(n));
				return result != 0 ? result : o1.compareTo(o2);
			}
        });
        
        return strings;
    }
}


// ======================================================================================

/**
 * Best Code
 * 
 * 더 나은 코드를 찾지못함.
 */

