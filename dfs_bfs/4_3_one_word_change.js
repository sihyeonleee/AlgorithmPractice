/**
 * 주어진 문제는 programmers 코딩테스트사이트의 문제입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/43163?language=javascript
 * 
 * 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 
 * begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
 * 
 * 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
 * 2. words에 있는 단어로만 변환할 수 있습니다.
 * 예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]
 * 라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.
 * 
 * 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을
 *  거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한사항
 * 각 단어는 알파벳 소문자로만 이루어져 있습니다.
 * 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
 * words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
 * begin과 target은 같지 않습니다.
 * 변환할 수 없는 경우에는 0를 return 합니다.
 * 입출력 예
 * begin	target	words	return
 * "hit"	"cog"	["hot", "dot", "dog", "lot", "log", "cog"]	4
 * "hit"	"cog"	["hot", "dot", "dog", "lot", "log"]	0
 * 
 */


/**
 * Code
 */
function solution(begin, target, words) {
    let map = new Map();
    
    function r(s, i, cnt){
        let str = s;
        let min = Infinity;
        for(w of words){
            
            if(s==w || map.has(w)) continue;
            str = s.split('');
            str[i] = w[i];
            str = str.join('');
            if(str==target) {
                return cnt + 1;
            }
            
            if(str==w){
                map.set(str, cnt+1);
                for(let j=0; j<begin.length; j++){
                    if(i != j) {
                        let result = r(str, j, cnt+1);
                        if(result != 0){
                            min = Math.min(min, result);
                        }
                    }
                }
                map.delete(str);
            }
        }
        
        return min === Infinity ? 0 : min;
    }
    let min = Infinity;
    for(let i=0; i<begin.length; i++){
        let result = r(begin, i, 0);
        if(result != 0) min = Math.min(min, result);
    }
    return min == Infinity ? 0 :min;
}


// ======================================================================================

/**
 * Best Code
 * 
 */
function canTransform(word1, word2) {
    let differences = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            differences++;
        }
        if (differences > 1) {
            return false;
        }
    }
    return differences === 1;
}

function dfs(current, target, words, visited, depth) {
    if (current === target) {
        return depth;
    }

    let minDepth = Infinity;
    for (let i = 0; i < words.length; i++) {
        if (!visited[i] && canTransform(current, words[i])) {
            visited[i] = true;
            const result = dfs(words[i], target, words, visited, depth + 1);
            if (result !== 0) {
                minDepth = Math.min(minDepth, result);
            }
            visited[i] = false;
        }
    }

    return minDepth === Infinity ? 0 : minDepth;
}

function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }

    const visited = new Array(words.length).fill(false);
    return dfs(begin, target, words, visited, 0);
}