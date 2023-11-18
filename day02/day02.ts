const input = Bun.file("./day02.txt");

await input.text().then((text) => {
  const spreadsheet: number[][] = text
    .split("\n")
    .map((x) => x.split(/\s/).map((n) => parseInt(n)));

  const checksum = spreadsheet.reduce((acc, curr) => {
    const max = Math.max(...curr);
    const min = Math.min(...curr);
    const diff = max - min;

    return acc + diff;
  }, 0);

  console.log("part 1: ", checksum);
});

await input.text().then((text) => {
  const spreadsheet: number[][] = text
    .split("\n")
    .map((x) => x.split(/\s/).map((n) => parseInt(n)));

  const checksum = spreadsheet.reduce((acc, curr) => {
    let div = 0;

    for (let i = 0; i < curr.length; i++) {
      for (let j = i + 1; j < curr.length; j++) {
        if (curr[i] % curr[j] === 0) {
          div = curr[i] / curr[j];
          break;
        }
        if (curr[j] % curr[i] === 0) {
          div = curr[j] / curr[i];
          break;
        }
      }
    }

    return div + acc;
  }, 0);

  console.log("part 2: ", checksum);
});
