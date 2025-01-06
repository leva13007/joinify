import { camelCaseHandler } from './camelCase';


export const strategiesNames = ['camel-case'] as const;
export type strategiesNames = (typeof strategiesNames)[number];

export type StrategyHandler = (...text: string[]) => string;
export type StrategyMap = Record<strategiesNames, StrategyHandler>;

export const strategies: StrategyMap = {
  'camel-case': camelCaseHandler,
};
