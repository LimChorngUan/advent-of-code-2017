const input = Bun.file("./day-1.txt");

await input.text().then((text) => {
  let numbers: number[] = text.split("").map((n) => parseInt(n));
  numbers.push(numbers[0]);

  let sum = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === numbers[i + 1]) {
      sum += numbers[i];
    }
  }

  console.log("part 1:", sum);
});

await input.text().then((text) => {
  const numbers: number[] = text.split("").map((n) => parseInt(n));
  const halfLength = numbers.length / 2;

  const firstHalf: number[] = numbers.slice(0, halfLength);
  const secondHalf: number[] = numbers.slice(halfLength, numbers.length);

  let sum = 0;

  for (let i = 0; i < firstHalf.length; i++) {
    if (firstHalf[i] === secondHalf[i]) {
      sum += firstHalf[i] * 2;
    }
  }

  console.log("part 2:", sum);
});
