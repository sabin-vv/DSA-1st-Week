function primeNumber(n) {
    let result = true
    for (i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            result = false
            break
        }
    }
    return result
}

console.log(primeNumber(11))