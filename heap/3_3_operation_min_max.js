/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/42628?language=javascript
 * 
 * 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

 * 명령어	수신 탑(높이)
 * I 숫자	큐에 주어진 숫자를 삽입합니다.
 * D 1	큐에서 최댓값을 삭제합니다.
 * D -1	큐에서 최솟값을 삭제합니다.
 * 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 
 * 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.
 * 
 */


/**
 * Code
 */
function solution(operations) {
    let heap = [];
    
   for(o of operations){
       let s = o.split(' ');
       let op = s[0];
       let num = Number(s[1]);
       
        if(op == 'I'){
            push(heap, num);
        }else if(op == 'D'){
            if(heap.length > 0){
                if(num == '1'){
                    rightPop(heap);
                }else {
                    leftPop(heap);
                }
            }
        }
   }

   return heap.length > 0 ? [findMaxValue(heap, 1)[1], heap[0]] : [0, 0];

}

function push(h, i){
    h.push(i);
    sortUp(h, h.length-1);
}

function leftPop(h){
    let f = h[0];
    let p = h.pop();
    if(h.length>0){
        h[0] = p;
        sortDown(h, 0);    
    }
    return f;
}

function rightPop(h){
    let max = findMaxValue(h, 1);
    if(max[0] == h.length-1) h.pop();
    else {
        let p = h.pop();
        h[max[0]] = p;
        sortDown(h, max[0]);
    }
}

function findMaxValue(h, index){
    if(h.length < index || index == 0) return null;
    
    let e = h[index-1];
    let max = [index-1, e];
    
    let left_index = index * 2;
    let lMax = findMaxValue(h, left_index);
    
    let right_index = index * 2 + 1;
    let rMax = findMaxValue(h, right_index);
    
    if(lMax && lMax[1] > max[1]) max = lMax;
    if(rMax && rMax[1] > max[1]) max = rMax;
    
    return max;
    
}


function sortDown(h, index){
    let i = index + 1;
    let m = (i) - 1;
    let l = (i*2) - 1;
    let r = (i*2+1) - 1;

    if(l < h.length && h[m] > h[l]){
        m = l;
    }
    
    if(r < h.length && h[m] > h[r]){
        m = r;
    }
    
    if(m != index){
        [h[index], h[m]] = [h[m], h[index]];
        sortDown(h, m);
    }
    
}

function sortUp(h, index){
    i = index + 1;
    if(i == 1) return;
    let p = (Math.floor(i/2)) - 1;
    if(h[index] < h[p]){
        [h[p], h[index]] = [h[index], h[p]];
        sortUp(h, p);
    }
}