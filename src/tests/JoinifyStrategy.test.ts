import { JoinifyStrategy } from '../JoinifyStrategy/index';
import { strategies } from '../strategies/index';

describe('JoinifyStrategy', () => {
  it('should apply a single strategy (camel-case)', () => {
    const strategy = new JoinifyStrategy(['camel-case']);
    expect(strategy.convert('hello world')).toBe('helloWorld');
    expect(strategy.convert(['hello', 'world'])).toBe('helloWorld');
  });

  it('should throw an error for unknown strategy', () => {
    expect(() => {
      const strategy = new JoinifyStrategy(['unknown-strategy' as any]);
      strategy.convert('test string');
    }).toThrow(`Unknown strategy: 'unknown-strategy'. Available strategies: ${Object.keys(strategies).join(', ')}`);
  });

  it('should apply strategies sequentially', () => {
    const multiStrategy = new JoinifyStrategy(['camel-case']);
    expect(multiStrategy.convert('TEST_INPUT data-case')).toBe('testInputDataCase');
  });

  it('should work with empty input', () => {
    const strategy = new JoinifyStrategy(['camel-case']);
    expect(strategy.convert('')).toBe('');
    expect(strategy.convert([])).toBe('');
  });

  it('should call `convert` from `call` method and return the same result', () => {
    const strategy = new JoinifyStrategy(['camel-case']);
    const input = 'hello world example';
    expect(strategy(input)).toBe(strategy.convert(input));
  });

  it('should handle large inputs efficiently', () => {
    const strategy = new JoinifyStrategy(['camel-case']);
    const longInput = 'word '.repeat(1000).trim();
    const result = strategy.convert(longInput);
    expect(result).toMatch(/^word(Word)+$/);
  });

  it('should handle input with mixed separators', () => {
    const strategy = new JoinifyStrategy(['camel-case']);
    expect(strategy.convert('hello-world_test 123')).toBe('helloWorldTest123');
  });
});
