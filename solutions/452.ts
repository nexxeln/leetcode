import { assertEquals } from "https://deno.land/std@0.181.0/testing/asserts.ts";

function findMinArrowShots(points: number[][]): number {
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
