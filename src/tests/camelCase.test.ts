import { camelCaseHandler } from '../strategies/camelCase';

describe('camelCaseHandler', () => {
  it('should convert a single word to lowercase', () => {
    expect(camelCaseHandler('Hello')).toBe('hello');
  });

  it('should convert multiple words separated by spaces to camelCase', () => {
    expect(camelCaseHandler('Hello world')).toBe('helloWorld');
  });

  it('should handle multiple spaces between words', () => {
    expect(camelCaseHandler('Hello     world')).toBe('helloWorld');
  });

  it('should handle hyphens as word separators', () => {
    expect(camelCaseHandler('Hello-world-test')).toBe('helloWorldTest');
  });

  it('should handle underscores as word separators', () => {
    expect(camelCaseHandler('Hello_world_test')).toBe('helloWorldTest');
  });

  it('should remove punctuation symbols', () => {
    expect(camelCaseHandler('Hello, world! How\'s it going?')).toBe('helloWorldHowsItGoing');
  });

  it('should handle numbers correctly', () => {
    expect(camelCaseHandler('Test 123')).toBe('test123');
    expect(camelCaseHandler('123 test')).toBe('123Test');
  });

  it('should handle mixed languages (Latin + Cyrillic)', () => {
    expect(camelCaseHandler('Hello мир')).toBe('helloМир');
  });

  it('should handle only non-alphabetic characters as input', () => {
    expect(camelCaseHandler('123 - _ + @')).toBe('123');
  });

  it('should return an empty string for empty input', () => {
    expect(camelCaseHandler('')).toBe('');
  });

  it('should handle multiple empty strings', () => {
    expect(camelCaseHandler('', '', '')).toBe('');
  });

  it('should convert an array of words to camelCase', () => {
    expect(camelCaseHandler('one', 'two', 'three')).toBe('oneTwoThree');
  });

  it('should handle strings with apostrophes', () => {
    expect(camelCaseHandler('O\'Connor is here')).toBe('oconnorIsHere');
  });

  it('should handle German special characters (Umlauts)', () => {
    expect(camelCaseHandler('fünf sechs sieben')).toBe('fünfSechsSieben');
  });

  it('should handle mixed separators (spaces, hyphens, underscores)', () => {
    expect(camelCaseHandler('Hello_world-test example')).toBe('helloWorldTestExample');
  });
});
