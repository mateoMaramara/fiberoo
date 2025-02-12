function fib(): number[] {
  const arr: number[] = [0, 1];
  for (let i = 2; i < 50; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

console.log(fib());

function numsToStrings(nums: number[]): string[] {
  return nums.map(num => num.toString());
}

console.log(numsToStrings(fib()));

function numEvenNums(nums: number[]): number {
  return nums.filter(num => num % 2 === 0).length;
}

console.log(numEvenNums(fib()));
