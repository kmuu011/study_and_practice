/** Task description
 * A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
 *
 * For example, in array A such that:
 *
 *   A[0] = 9  A[1] = 3  A[2] = 9
 *   A[3] = 3  A[4] = 9  A[5] = 7
 *   A[6] = 9
 * the elements at indexes 0 and 2 have value 9,
 * the elements at indexes 1 and 3 have value 3,
 * the elements at indexes 4 and 6 have value 9,
 * the element at index 5 has value 7 and is unpaired.
 * Write a function:
 *
 * function solution(A);
 *
 * that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.
 *
 * For example, given array A such that:
 *
 *   A[0] = 9  A[1] = 3  A[2] = 9
 *   A[3] = 3  A[4] = 9  A[5] = 7
 *   A[6] = 9
 * the function should return 7, as explained in the example above.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an odd integer within the range [1..1,000,000];
 * each element of array A is an integer within the range [1..1,000,000,000];
 * all but one of the values in A occur an even number of times.
 *
 * 세줄 요약
 * 주어진 ArrayList<Number>에 홀수번 들어있는 수가 있음 해당 수를 뽑아야함
 * 홀수번 포함된 수는 여러개가 아니임. The array contains an odd number of elements
 * an odd number 이기때문 several odd numbers 가 아니임.
 *
 * */

const list = [1,2,3,1,4,2,3];

/** 최고 효율
 * XOR 연산을 이용한 풀이 방식
 * 문제처럼 홀수인 수가 단 하나일때 최고 효율
 * 홀수인 수가 여러개인 경우에는 불가능한 로직
 * */
function solution1(A) {
    let result = 0;

    for(let i=0 ; i<A.length ; i++){
        result = result^A[i];
    }

    return result;
}

console.log(solution1(list))


/** 평범한 방식
 * 문제와 달리 홀수인 수가 여러개일때도 사용가능한 로직
 * */
function solution2(A) {
    const obj = A.reduce((acc, num) => {
        acc[num] = acc[num] !== undefined ? acc[num]+1 : 1;

        return acc;
    }, {});

    for(const k in obj){
        if(obj[k] % 2 === 1) return Number(k);
    }
}

console.log(solution2(list))