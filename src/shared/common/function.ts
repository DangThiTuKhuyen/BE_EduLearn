const numberString = '0123456789';
const capitalizeString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseString = 'abcdefghijklmnopqrstuvwxyz';

export function randomPassString(length: number): string {
  const { floor, random } = Math;
  const allChars = [numberString, capitalizeString, lowercaseString];
  const allCharString = allChars.join('');
  return [
    ...allChars.map((type) => type[floor(random() * type.length)]),
    ...Array(length - allChars.length)
      .fill(0)
      .map(() => allCharString[floor(random() * allCharString.length)]),
  ]
    .sort(() => 0.5 - random())
    .join('');
}
