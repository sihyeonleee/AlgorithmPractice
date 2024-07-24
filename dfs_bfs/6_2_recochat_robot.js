/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 *https://school.programmers.co.kr/learn/courses/30/lessons/169199?language=javascript
 * 
 * 리코쳇 로봇이라는 보드게임이 있습니다.

 * 이 보드게임은 격자모양 게임판 위에서 말을 움직이는 게임으로, 시작 위치에서 목표 위치까지 최소 
 * 몇 번만에 도달할 수 있는지 말하는 게임입니다.
 * 
 * 이 게임에서 말의 움직임은 상, 하, 좌, 우 4방향 중 하나를 선택해서 게임판 위의 장애물이나 맨 
 * 끝에 부딪힐 때까지 미끄러져 이동하는 것을 한 번의 이동으로 칩니다.
 * 
 * 다음은 보드게임판을 나타낸 예시입니다.
 * 
 * ...D..R
 * .D.G...
 * ....D.D
 * D....D.
 * ..D....
 * 여기서 "."은 빈 공간을, "R"은 로봇의 처음 위치를, "D"는 장애물의 위치를, "G"는 목표지점을 나타냅니다.
 * 위 예시에서는 "R" 위치에서 아래, 왼쪽, 위, 왼쪽, 아래, 오른쪽, 위 순서로 움직이면 7번 만에 "G" 위치에
 * 멈춰 설 수 있으며, 이것이 최소 움직임 중 하나입니다.
 * 
 * 게임판의 상태를 나타내는 문자열 배열 board가 주어졌을 때, 말이 목표위치에 도달하는데 최소 몇 번 이동해야
 *  하는지 return 하는 solution함수를 완성하세요. 만약 목표위치에 도달할 수 없다면 -1을 return 해주세요.
 * 
 * 제한 사항
 * 3 ≤ board의 길이 ≤ 100
 * 3 ≤ board의 원소의 길이 ≤ 100
 * board의 원소의 길이는 모두 동일합니다.
 * 문자열은 ".", "D", "R", "G"로만 구성되어 있으며 각각 빈 공간, 장애물, 로봇의 처음 위치, 목표 지점을 나타냅니다.
 * "R"과 "G"는 한 번씩 등장합니다.
 * 입출력 예
 * board	result
 * ["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]	7
 * [".D.R", "....", ".G..", "...D"]	-1
 * 
 */


/**
 * Code
 * 
 * 결과적으로 오답
 * 방향성은 맞았으나, direction 중 맵의끝( 'D' 혹은 배열의 끝 )을 구하는 과정에서 실패했다.
 */
function s(board){

    let queue = [];

    for(let i=0; i<board.length; i++){
        let b = board[i];
        let j = b.indexOf('R');
        if(j>-1){
            queue.push([i, j]);
            break;
        }
    }

    let visited = new Array(board.length).fill(null).map(() => new Array(board[0].length).fill(false));
    let cnt = 1;
    
    while(queue.length > 0){
        let q = queue.shift();
        
        for(d of [[q[0], q[1]+1], [q[0]+1, q[1]], [q[0], q[1]-1], [q[0]-1, q[1]]]){
            if(0 < d[0] && d[0] < board.length && 0 < d[1] && d[1] < board[0].length){
                if(board[d[0][d[1]]] == 'G'){
                    return cnt;
                }
                if(!visited[d[0]][d[1]] && board[d[0][d[1]]] != 'D'){
                    visited[d[0]][d[1]] = true;
                    queue.push(d);
                }   
            }
        }

        cnt++;
        
    }

    return -1;
    
}

// ======================================================================================

/**
 * Best Code
 * 아래는 BFS 알고리즘으로 풀이한 결과이다.
 * 
 * 배운점 : new Map / new Set 의 차이점
 * map == 키/쌍 이고, set == 고유값만 저장한다.
 * 
 */
function solution(board) {
    const n = board.length;
    const m = board[0].length;

    let start = null;
    let goal = null;

    // 로봇의 시작 위치와 목표 위치를 찾는다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'R') {
                start = [i, j];
            } else if (board[i][j] === 'G') {
                goal = [i, j];
            }
            
            if(start && goal) break;
        }
    }

    if (!start || !goal) {
        return -1;
    }

    const directions = [
        [-1, 0], // 상
        [1, 0],  // 하
        [0, -1], // 좌
        [0, 1]   // 우
    ];

    const queue = [[...start, 0]]; // [x, y, 이동 횟수]
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const [x, y, moves] = queue.shift();

        if (x === goal[0] && y === goal[1]) {
            return moves;
        }

        for (const [dx, dy] of directions) {
            let nx = x;
            let ny = y;

            // 장애물이나 경계에 부딪힐 때까지 이동
            while (
                nx + dx >= 0 && nx + dx < n &&
                ny + dy >= 0 && ny + dy < m &&
                board[nx + dx][ny + dy] !== 'D'
            ) {
                nx += dx;
                ny += dy;
            }

            if (!visited.has([nx, ny].toString())) {
                visited.add([nx, ny].toString());
                queue.push([nx, ny, moves + 1]);
            }
        }
    }

    return -1;
}