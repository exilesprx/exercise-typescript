export function valid(digitString: string): boolean {
  const digits = digitString.replace(/\s/g, "");

  if (!/^\d+$/.test(digits)) {
    return false;
  }

  let sum = 0;
  let digitCount = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    digitCount++;
    let digit = parseInt(digits[i]);
    if (digitCount % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  return digitCount > 1 && sum % 10 === 0;
}
