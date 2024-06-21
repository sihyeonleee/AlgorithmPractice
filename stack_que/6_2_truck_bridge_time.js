/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
 * 
 * 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 
 * 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 
 * 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 
 * 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
 * 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 
 * 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
 * 
 */


/**
 * Code
 */
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = new Array(bridge_length).fill(0);
    
    while(true){
        answer++;
        bridge.splice(0,1);
        
        if(truck_weights.length > 0){
            let sumWeight = bridge.reduce((a,b)=>a+b, 0);
            if(sumWeight + truck_weights[0] <= weight){
                let truck = truck_weights.splice(0,1)[0];
                bridge.push(truck);
            }else {
                bridge.push(0);
            }
        }
        
        if(bridge.length == 0) break;
    }
    
    return answer;
}

// ======================================================================================

/**
 * Best Code
 * 타인의 코드를 참고하여 직접 풀어본 코드
 */
function solution(length, weight, trucks) {
    var time = 0;
    let weightOnBridge = 0;
    let trucksOnBridge = [];
    while(trucks.length > 0 || trucksOnBridge.length > 0){

        time++;

        if(trucksOnBridge[0]?.time == time){
            let truck = trucksOnBridge.splice(0,1)[0];
            weightOnBridge -= truck.weight;
        }
        
        if(weightOnBridge + trucks[0] <= weight && trucksOnBridge.length < length){
            let truck = trucks.splice(0,1)[0];
            weightOnBridge += truck;
            trucksOnBridge.push({
                weight : truck,
                time : time + length
            });
        }

    }
    
    return time;
}