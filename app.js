'use strict';

// メモ化再帰と呼ばれる処理？
// 結果を格納する連想配列
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

// フィボナッチ数を計算・格納・返す関数
function fib(n) {
    // Map#memo が key: n を持っていれば(n < 2)、
    // key:n に対応する value を返す
    if (memo.has(n)) {
        return memo.get(n);
    }
    // Map#memo が key: n を持っていなければ(n >= 2)、
    // 再帰関数を計算してフィボナッチ数を計算し、
    // Map#memo に格納 => フィボナッチ数を返す
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}
