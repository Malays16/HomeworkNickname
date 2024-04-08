import { Validator } from '../app';

const validator = new Validator();

test('valid usernames with only letters and numbers', () => {
  expect(validator.validateUsername('mark123b')).toBe(true);
  expect(validator.validateUsername('user456a')).toBe(true);
  expect(validator.validateUsername('Alice123c')).toBe(true);
});

test('valid usernames with underscores and dashes', () => {
  expect(validator.validateUsername('mark_Tven_132l')).toBe(true);
  expect(validator.validateUsername('user-456l')).toBe(true);
  expect(validator.validateUsername('Alice-123l')).toBe(true);
});

test('invalid usernames with four consecutive numbers', () => {
  expect(validator.validateUsername('markTven1234l')).toBe(false);
  expect(validator.validateUsername('user4564l')).toBe(false);
  expect(validator.validateUsername('Alice1234l')).toBe(false);
});