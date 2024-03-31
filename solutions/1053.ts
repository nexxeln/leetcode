function prevPermOpt1(arr: number[]): number[] {
  if (arr.length <= 1) return arr

  let i = arr.length - 2
  while (i >= 0 && arr[i] <= arr[i + 1]) {
    i--
  }

  if (i < 0) return arr

  let j = arr.length - 1
  while (j > 0) {
    if (arr[j] < arr[i]) {
      while (arr[j] === arr[j - 1]) j--
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      break
    }
    j--
  }

  return arr
}

