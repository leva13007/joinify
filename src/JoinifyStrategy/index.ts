import { strategiesNames, strategies } from '../strategies/index';

export class JoinifyStrategy extends Function {
  private strategies: strategiesNames[];

  constructor(strategies: strategiesNames[]) {
    super();
    this.strategies = strategies;
    return new Proxy(this, {
      apply: (target, thisArg, args: [string | string[]]) => target.convert(args[0]),
    });
  }

  convert(input: string | string[]): string {
    const combinedInput = Array.isArray(input) ? input.join(' ') : input;
    return this.strategies.reduce((result, strategy) => {
      if (!strategies[strategy]) {
        throw new Error(`Unknown strategy: '${strategy}'. Available strategies: ${Object.keys(strategies).join(', ')}`);
      }
      return strategies[strategy](result);
    }, combinedInput);
  }
};
