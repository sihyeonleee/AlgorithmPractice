/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/42626?language=javascript
 * 
 * 매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 
 * 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 
 * 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.
 * 
 * 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
 * Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
 * Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 
 * 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한 사항
 * scoville의 길이는 2 이상 1,000,000 이하입니다.
 * K는 0 이상 1,000,000,000 이하입니다.
 * scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
 * 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.
 * 
 */


/**
 * Code
 */
function solution(scoville, K) {
    var answer = 0;
    
    scoville.sort((a,b)=>a-b);
    let count = 0;
    
    while(1<scoville.length && scoville[0] < K ){
        let v1 = pop(scoville);
        let v2 = pop(scoville);
        scoville.push(v1 + (v2 * 2));
        sortUp(scoville, scoville.length-1);
        count++;
    }
    return scoville[0] >= K ? count : -1;
}

function pop(h){
    let f = h[0];
    let p = h.pop();
    if(h.length>0){
        h[0] = p;
        sortDown(h, 0);    
    }
    return f;
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


// ======================================================================================

/**
 * Best Code
 * 
 * 더 나은 코드를 찾지못함.
 */

