import { infixToPostfixConversion } from '../src/infixToPostfixConversion.js';

describe('infixToPostfixConversion', () => {
  /**
   * Test to convert a+b to ab+.
   */
  test('converts a+b to ab+', () => {
    expect(infixToPostfixConversion('a+b')).toBe('ab+');
  });

  /**
   * Test to convert a+b*c to abc*+.
   */
  test('converts a+b*c to abc*+', () => {
    expect(infixToPostfixConversion('a+b*c')).toBe('abc*+');
  });

  /**
   * Test to convert a+b*(c^d-e)^(f+g*h)-i to abcd^e-fgh*+^*+i-.
   */
  test('converts a+b*(c^d-e)^(f+g*h)-i to abcd^e-fgh*+^*+i-', () => {
    expect(infixToPostfixConversion('a+b*(c^d-e)^(f+g*h)-i')).toBe('abcd^e-fgh*+^*+i-');
  });

  /**
   * Test to correctly handle parentheses.
   */
  test('correctly handles parentheses', () => {
    expect(infixToPostfixConversion('(a+b)*c')).toBe('ab+c*');
  });
});
