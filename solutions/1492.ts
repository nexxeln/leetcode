function kthFactor(n: number, k: number): number {
  const factors = [...Array(n + 1).keys()].filter((i) => n % i === 0)

  return factors.length >= k ? factors[k - 1] : -1
}
