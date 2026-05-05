// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('phone number (123) 456-7890 is valid', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('phone number 123-456-7890 is valid', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('phone number 1234567890 is not valid', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('phone number abc-def-ghij is not valid', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail tests
test('email user@example.com is valid', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('email hello@world.edu is valid', () => {
  expect(isEmail('hello@world.edu')).toBe(true);
});

test('email missing @ is not valid', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

test('email missing domain is not valid', () => {
  expect(isEmail('user@.com')).toBe(false);
});

// isStrongPassword tests
test('password Abcd1234 is strong', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('password hello is strong', () => {
  expect(isStrongPassword('hello')).toBe(true);
});

test('password 1234 is not strong (starts with number)', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('password ab is not strong (too short)', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate tests
test('date 12/31/2020 is valid', () => {
  expect(isDate('12/31/2020')).toBe(true);
});

test('date 1/1/2000 is valid', () => {
  expect(isDate('1/1/2000')).toBe(true);
});

test('date 12/31/20 is not valid (short year)', () => {
  expect(isDate('12/31/20')).toBe(false);
});

test('date 12-31-2020 is not valid (wrong separator)', () => {
  expect(isDate('12-31-2020')).toBe(false);
});

// isHexColor tests
test('hex color #FF0000 is valid', () => {
  expect(isHexColor('#FF0000')).toBe(true);
});

test('hex color #abc is valid', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('hex color #GGGGGG is not valid', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});

test('hex color #12345 is not valid (5 chars)', () => {
  expect(isHexColor('#12345')).toBe(false);
});
