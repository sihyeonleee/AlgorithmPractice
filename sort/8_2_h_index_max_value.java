/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript
 * 
 * H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 
 * 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.
 * 
 * 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 
 * h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
 * 
 * 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 
 * 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한사항
 * 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
 * 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.
 * 입출력 예
 * citations	return
 * [3, 0, 6, 1, 5]	3
 * 입출력 예 설명
 * 이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 
 * 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.
 * 
 * 문제가 잘 안풀린다면😢
 * 힌트가 필요한가요? [코딩테스트 연습 힌트 모음집]으로 오세요! → 클릭
 * 
 * ※ 공지 - 2019년 2월 28일 테스트 케이스가 추가되었습니다.
 * 
 */

/**
 * Code
 */
import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public int solution(int[] citations) {
        int result = citations.length;
		
		Integer[] list = Arrays.stream(citations).boxed().toArray(Integer[]::new);
		Arrays.sort(list, new Comparator<Integer>() {
			@Override
			public int compare(Integer o1, Integer o2) {
				return o2.compareTo(o1);
			}
		});
	
		for(int i=0; i<list.length; i++) {
			if((i+1) > list[i]) {
				result = i;
				break;
			}
		}
        
        return result;
    }
}


// ======================================================================================

/**
 * Best Code
 * 
 */

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] citations = {3, 0, 6, 1, 5};
        System.out.println(solution(citations)); // 출력: 3
    }

    public static int solution(int[] citations) {
        // 배열을 오름차순으로 정렬
        Arrays.sort(citations);

        int n = citations.length;
        for (int i = 0; i < n; i++) {
            int h = n - i; // h는 현재 인덱스 이후의 논문 개수
            if (citations[i] >= h) {
                return h;
            }
        }

        return 0;
    }
}