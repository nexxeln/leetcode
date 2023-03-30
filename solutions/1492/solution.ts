import { assertEquals } from "https://deno.land/std@0.181.0/testing/asserts.ts";

function kthFactor(n: number, k: number): number {
  const factors = [...Array(n + 1).keys()].filter((i) => n % i === 0);

  return factors.length >= k ? factors[k - 1] : -1;
}

Deno.test("kthFactor", () => {
  assertEquals(kthFactor(12, 3), 3);
  assertEquals(kthFactor(7, 2), 7);
  assertEquals(kthFactor(4, 4), -1);
});
