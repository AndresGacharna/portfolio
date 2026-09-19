// ISO 6346 container identification: owner code + serial + check digit.
// Letter values skip multiples of 11 (A=10 … Z=38).
const LETTER_VALUES = [
  10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 34, 35, 36, 37, 38,
];

function charValue(char: string): number {
  if (/\d/.test(char)) return Number(char);
  return LETTER_VALUES[char.charCodeAt(0) - 65];
}

export function checkDigit(ownerAndSerial: string): number {
  const sum = [...ownerAndSerial].reduce(
    (acc, char, i) => acc + charValue(char) * 2 ** i,
    0,
  );
  return (sum % 11) % 10;
}

/** "AGCU", 3 → { owner: "AGCU", serial: "000003", check: 7 } */
export function containerId(owner: string, serial: number) {
  const serialText = String(serial).padStart(6, "0");
  return {
    owner,
    serial: serialText,
    check: checkDigit(owner + serialText),
  };
}
