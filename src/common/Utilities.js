import {PINK, GREEN, BLUE} from '../theme/Color';

export function kFormatter(number) {
  return Math.abs(number) > 999
    ? Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + 'k'
    : Math.sign(number) * Math.abs(number);
}

export function divisor(affected, recovered) {
  return Math.abs(((affected - recovered) / recovered) * 100);
}

export function colorGenerator(number) {
  if (number > 25) {
    return PINK;
  } else if (number > 7) {
    return GREEN;
  } else {
    return BLUE;
  }
}

export const checkNameLength = countryName =>
  countryName.length > 8 ? `${countryName.slice(0, 8)}...` : countryName;
