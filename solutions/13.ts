type RomanChars = "I" | "V" | "X" | "L" | "C" | "D" | "M"

// MCMXCIV -> 1994
// 1000, 100, 1000, 10, 100, 1, 5

export function romanToInt(s: string): number {
  const romanMap: Record<RomanChars, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  const arr = s.split("") as RomanChars[]

  let int = 0

  for (let i = 0; i < arr.length; i++) {
    const current = romanMap[arr[i]]
    const next = romanMap[arr[i + 1]]

    if (current < next) {
      int -= current
    } else {
      int += current
    }
  }

  return int
}
