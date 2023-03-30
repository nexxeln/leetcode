import { assertEquals } from "https://deno.land/std@0.181.0/testing/asserts.ts";

function prevPermOpt1(arr: number[]): number[] {
  let i = arr.length - 2;
  while (i >= 0 && arr[i] <= arr[i + 1]) i--;

  if (i === -1) return arr;

  let j = arr.length - 1;
  while (j >= 0 && arr[j] >= arr[i]) j--;

  [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr;
}

Deno.test("prevPermOpt1", () => {
  assertEquals(prevPermOpt1([3, 2, 1]), [3, 1, 2]);
  assertEquals(prevPermOpt1([1, 1, 5]), [1, 1, 5]);
  assertEquals(prevPermOpt1([1, 9, 4, 6, 7]), [1, 7, 4, 6, 9]);
});
