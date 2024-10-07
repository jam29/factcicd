// factorial.js
function factorial(n) {
    if (n < 0) return -1; // Negative numbers do not have factorials
    if (n === 0) return 1; // 0! is 1
    return n * factorial(n - 1);
}

module.exports = factorial;
