/**
 * 모 기업의 테스트 문제
 * 문제는 비공개
 * 같은계좌번호 정렬
 */


/**
 * Code
 */
function solution(nums) {
    const isValidAccountNumber = (num) => {
        const regex = /^[0-9-]+$/;
        if (!regex.test(num)) return false;

        const numbersOnly = num.replace(/-/g, '');
        if (numbersOnly.length < 11 || numbersOnly.length > 14) return false;

        const hyphensCount = (num.match(/-/g) || []).length;
        if (hyphensCount < 0 || hyphensCount > 3) return false;

        if (num.startsWith('-') || num.endsWith('-')) return false;
        if (/--/.test(num)) return false;

        return true;
    };

    const bankMap = {};

    nums.forEach((num) => {
        if (isValidAccountNumber(num)) {
            const key = num.replace(/[0-9]/g, 'N');
            if (!bankMap[key]) {
                bankMap[key] = 0;
            }
            bankMap[key]++;
        }
    });

    const result = Object.values(bankMap).sort((a, b) => b - a);
    return result;
}

// 예시 입력
const nums = [
    "123-456-7890", "111-222-3333", "222-333-4444", "333-444-5555",
    "444-555-6666", "555-666-7777", "666-777-8888", "777-888-9999",
    "888-999-0000", "999-000-1111", "123-4567890123", "987-654-3210"
];

console.log(solution(nums)); // 결과 출력
// ======================================================================================

/**
 * Best Code
 * 
 * 
**/