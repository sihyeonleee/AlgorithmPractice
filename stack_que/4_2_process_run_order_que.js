/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
 * 
 * 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다.
 * 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 
 * 실행되는지 알아내면 됩니다.운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 
 * 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.
 * 예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.
 *
 * 현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 몇 번째로 실행되는지 알고싶은 프로세스의 
 * 위치를 알려주는 location이 매개변수로 주어질 때, 해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요.
 * 
 * 
 */


/**
 * Code
 * 결과적으로 오답이었다.
 * ※ 원인
 * 문제 분석실패가 가장 컷으며, priorities의 원형을 변동시키지 
 * 않으려는 고집(큐를 사용하지 않음)으로 사고력이 굳어버림.
 * 
 * ex) solution([2,3,1,2], 0);
 * 실행시 0번쨰 인덱스의 실행 순서는 3이어야 하나 2가 반환
 * 3번째 인덱스 1을 실행할때의 priorities는 [2, 0, 1, 2] 형태에서
 * 맨앞의 2을 우선탐색하여 생긴 오류로 반드시 큐를 사용해야 풀수있었던문제
 */
function solution(priorities, location) {
    let pointer = 0;
    let length = priorities.length;
    let proc = new Array(length).fill(0);
    
    for(let i=0; i<length; i++){
        let max = priorities[pointer];
        for(let j=0; j<length; j++){
            let target = priorities[j];
            if(max<target){
                max = target;
                pointer = j;
            }
        }
        proc[pointer] = i+1;
        priorities[pointer] = 0;
        do {
            pointer++;
            if(pointer >= length) pointer = 0;
        }while(priorities[pointer] == 0 && i < length-1)
    }
    return proc[location];
}


// ======================================================================================

/**
 * Best Code
 */
function solution(priorities, location) {
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    var count = 0;        
    while(true){
        var cur = list.splice(0,1)[0];        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}