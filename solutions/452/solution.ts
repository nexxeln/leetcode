import { assertEquals } from "https://deno.land/std@0.181.0/testing/asserts.ts";

function findMinArrowShots(points: number[][]): number {
  // 1. Sort the points array based on the xend values in ascending order[1].
  // 2. Initialize a variable count to store the number of arrows needed, and set it to 1.
  // 3. Initialize a variable prev_end to store the end value of the previous balloon, and set it to the xend value of the first balloon in the sorted array.
  // 4. Iterate through the sorted points array starting from the second balloon. For each balloon, check if its xstart value is greater than prev_end. If it is, increment count by 1 and update prev_end to the current balloon's xend value.
  // 5. Return the count variable as the minimum number of arrows needed to burst all balloons[1].

  // solve
  points.sort((a, b) => a[1] - b[1]);

  let count = 1;
  let prev_end = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > prev_end) {
      count++;
      prev_end = points[i][1];
    }
  }

  return count;
}

Deno.test("findMinArrowShots", () => {
  assertEquals(
    findMinArrowShots([
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ]),
    2
  );
  assertEquals(
    findMinArrowShots([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]),
    4
  );
  assertEquals(
    findMinArrowShots([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ]),
    2
  );
  assertEquals(findMinArrowShots([[1, 2]]), 1);
  assertEquals(
    findMinArrowShots([
      [2, 3],
      [2, 3],
    ]),
    1
  );
});
