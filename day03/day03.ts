const input = Bun.file("./day03.txt");

/* Part 1 */
const getRing = (number: number, n = 1, start = 2, end = 9) => {
  if (number >= start && number <= end) {
    return {
      n,
      start,
      end,
    };
  }

  const nextN = n + 1;
  const nextStart = end + 1;
  const nextEnd = Math.pow(2 * nextN + 1, 2);

  return getRing(number, n + 1, nextStart, nextEnd);
};

await input.text().then((text) => {
  const number: number = parseInt(text);

  if (number === 1) return 0;

  /*
  - n: ring distance where this number is placed
  - start: the starting number of ring n
  - end: the last number of ring n

  - range: [start, start + 1, start + 2, ..., end -1, end]
  - div: the amount of numbers in a col/row of ring n, or one edge of ring n
  */
  const { n, start, end } = getRing(number);

  const range = Array.from({ length: end - start + 1 }, (_, i) => i + start);
  const div = (end - start + 1) / 4;

  /*
  The mininum required steps = amount of steps to the mid point (m) + amount of steps throuh the number of ring (n)

  For m:
    E.g. ring n = 2
      => range = [10, 11, 12, 13, 14, 15, 16, 16, 18, ..., 25]
      => divided into 4 edges [[10, 11, 12, 13], [14, 15, 16, 17], [...], [...]]
      => The mid point of each edge is 11, 15, 19, 23 which is the index (n-1) of each edge
      => So from |(index of each number % div) - (n -1)| you get the steps of each number to the mid point

      for n = 2, you can a representation like this:
      [[1, 0, 1, 2], [1, 0, 1, 2], [...], [...]]

    And the final calculation would be m + n
  */
  const steps = Math.abs((range.indexOf(number) % div) - (n - 1)) + n;

  console.log(steps);
});
