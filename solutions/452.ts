function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1])

  let count = 1
  let prev_end = points[0][1]

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > prev_end) {
      count++
      prev_end = points[i][1]
    }
  }

  return count
}
