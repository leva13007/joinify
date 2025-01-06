export const camelCaseHandler = (...strings: string[]): string => {
  return strings
    .join(' ')
    .split(/[\s-_]+/)
    .map(str => str.replace(/[^\p{Ll}\p{Lu}\p{N}]/gu, ''))
    .map((str, index) => {
      const lowerCase = str.toLowerCase();
      return index === 0
        ? lowerCase
        : lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    })
    .join('');
};
