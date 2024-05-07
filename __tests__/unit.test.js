// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isEmail
test('johndoe@gmail.com to be valid email', () => {
  expect(isEmail('johndoe@gmail.com')).toBe(true);
});

test('johndoe123@gmail.com to be valid email', () => {
  expect(isEmail("jonnydoe123@gmail.com")).toBe(true);
});

test('johndoe123@gmail to be invalid email', () => {
  expect(isEmail("jonnydoe123@gmail")).toBe(false);
});

test('johndoe123@.com to be invalid email', () => {
  expect(isEmail("jonnydoe123@.com")).toBe(false);
});

// isPhoneNumber
test('(385)533-0186 to be valid phone number', () => {
  expect(isPhoneNumber('(385)533-0186')).toBe(true);
});

test('000-000-0000 to be valid phone number', () => {
  expect(isPhoneNumber("000-000-0000")).toBe(true);
});

test('000-000-q123 to be invalid phone number', () => {
  expect(isPhoneNumber("000-000-q123")).toBe(false);
});

test('1234567 to be invalid phone number', () => {
  expect(isPhoneNumber("1234567")).toBe(false);
});

// isStrongPassword
test('abcd1234 be valid strong password', () => {
  expect(isStrongPassword('abcd1234')).toBe(true);
});

test('ucsd_password to be valid strong password', () => {
  expect(isStrongPassword('ucsd_password')).toBe(true);
});

test('123 to be invalid strong password', () => {
  expect(isStrongPassword('123')).toBe(false);
});

test('abcde1234! to be invalid strong password', () => {
  expect(isStrongPassword('abcde1234!')).toBe(false);
});

// isDate
test('2/15/2003 be valid date', () => {
  expect(isDate('2/15/2003')).toBe(true);
});

test('10/12/1976 to be valid date', () => {
  expect(isDate('10/12/1976')).toBe(true);
});

test('123/32/2040 to be invalid date', () => {
  expect(isDate('123/32/2040')).toBe(false);
});

test('a/12/2000 to be invalid date', () => {
  expect(isDate('a/12/2000')).toBe(false);
});

// isHexColor
test('FFFFFF be valid hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('b12 to be valid hex color', () => {
  expect(isHexColor('#b12')).toBe(true);
});

test('12345 to be invalid hex color', () => {
  expect(isHexColor('#12345')).toBe(false);
});

test('00000! to be invalid hex color', () => {
  expect(isHexColor('#00000!')).toBe(false);
});