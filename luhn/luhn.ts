export function valid(digitString: string): boolean {
  const digits = digitString.replace(/\s/g, "");

  if (!/^\d+$/.test(digits)) {
    return false;
  }

  if (digits.length <= 1) {
    return false;
  }

  const sum = [...digits]
    .reverse()
    .map(Number)
    .reduce((acc: number, digit: number, index: number) => {
      if (index % 2 === 1) {
        const doubled = digit * 2;
        return acc + (doubled > 9 ? doubled - 9 : doubled);
      }
      return acc + digit;
    });

  return sum % 10 === 0;
}
