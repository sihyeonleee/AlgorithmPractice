/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
 * 
 * n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 
 * 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
 * 
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 * 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 
 * 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한사항
 * 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
 * 각 숫자는 1 이상 50 이하인 자연수입니다.
 * 타겟 넘버는 1 이상 1000 이하인 자연수입니다.
 * 
 */


/**
 * Code
 */
function s(maps){
    function r(i, j, c){
        if(!maps[i] || !maps[i][j] || maps[i][j] == 0) return -1;
        
        if(i == maps.length-1 && j == maps[i].length-1) return c;

        maps[i][j] = 0;
        
        let right = r(i, j+1, c+1);
        let left = r(i, j-1, c+1);
        let up = r(i+1, j, c+1);
        let down = r(i-1, j, c+1);

        let results = [right, left, up, down].filter(val => val !== -1);
        if (results.length === 0) return -1;
        return Math.min(...results);
        
    }
    return r(0, 0, 1)
}
s([[1, 0, 1, 1, 1], [0, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 0, 0], [1, 1, 1, 0, 1]]);


// ======================================================================================

/**
 * Best Code
 * 
 * BFS 넓이 우선 탐색
 */

function solution(maps) {
    const directions = [
        [0, 1],  // 오른쪽
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [-1, 0]  // 위
    ];
    
    const n = maps.length;
    const m = maps[0].length;
    
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    const queue = [[0, 0, 1]]; // 시작점 (0, 0)에서 시작하며, 이동 거리 1
    visited[0][0] = true;
    
    while (queue.length > 0) {
        const [x, y, distance] = queue.shift();
        
        if (x === n - 1 && y === m - 1) {
            return distance;
        }
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, distance + 1]);
            }
        }
    }
    
    return -1;
}
