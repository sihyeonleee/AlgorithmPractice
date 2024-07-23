/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/154538?language=javascript
 * 
 * 자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.

 * x에 n을 더합니다
 * x에 2를 곱합니다.
 * x에 3을 곱합니다.
 * 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 
 * return하도록 solution 함수를 완성해주세요. 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.
 * 
 * 제한사항
 * 1 ≤ x ≤ y ≤ 1,000,000
 * 1 ≤ n < y
 * 입출력 예
 * x	y	n	result
 * 10	40	5	2
 * 10	40	30	1
 * 2	5	4	-1
 * 
 */


/**
 * Code
 */


// ======================================================================================

/**
 * Best Code
 * javascript 에서 let queue = [] 와 같이 일반 배열을 이용할경우
 * Queue 와 같이 작동되는 shift, pop 기능이 있으나, 해당기능은 시간 복잡도 O(n) 이다.
 * 즉 일반적인 List 와 같은 형태로 동작되기 때문인데. 
 * 반드시 Queue 와 같이 작동되는 클래스를 구현하여 풀어야 한다.
 * 
 * 아래는 Queue 클래스와 BFS 알고리즘으로 풀이한 결과이다.
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    // 큐에 요소 추가
    enqueue(element) {
        const node = new Node(element);
        if (this.rear) {
            this.rear.next = node;
        }
        this.rear = node;
        if (!this.front) {
            this.front = node;
        }
        this.length++;
    }

    // 큐에서 요소 제거
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        const dequeuedElement = this.front.element;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.length--;
        return dequeuedElement;
    }

    // 큐가 비어 있는지 확인
    isEmpty() {
        return this.length === 0;
    }

    // 큐의 앞쪽 요소를 확인
    peek() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.front.element;
    }

    // 큐의 크기를 확인
    size() {
        return this.length;
    }

    // 큐의 모든 요소를 문자열로 변환
    printQueue() {
        let current = this.front;
        let result = [];
        while (current) {
            result.push(current.element);
            current = current.next;
        }
        return result.join(" ");
    }
}

function solution(x, y, n) {
        if (x === y) return 0;

    const visited = new Array(y + 1).fill(false);
    const queue = new Queue();  // [현재 값, 연산 횟수]
    queue.enqueue([x, 0])

    while (queue.size() > 0) {
        const [current, steps] = queue.dequeue();

        for (const next of [current + n, current * 2, current * 3]) {
            if (next === y) {
                return steps + 1;
            }

            if (next < y && !visited[next]) {
                visited[next] = true;
                queue.enqueue([next, steps + 1]);
            }
        }
    }

    return -1;
}