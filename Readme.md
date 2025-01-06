# Joinify: String Concatenation Strategies

Joinify is a tool for transforming strings into various formats, supporting class instance calls as functions and full Unicode support.

Features
	•	Supports different string formats.
	•	Full Unicode support: Latin, Cyrillic, Chinese characters, and other alphabets.
	•	Class instance can be called as a function.
	•	Flexible and easy to use.

---

### Installation

To install the package, use:
```bash
npm install joinify
```

### Usage

__Creating an instance and calling it as a function:__
```typescript
import { JoinifyStrategy } from 'joinify';

const strategy = new JoinifyStrategy(['camel-case']);
const input = 'Hello world example';

console.log(strategy(input)); // 'helloWorldExample'
```

__Calling via the convert method__

You can use the convert method directly:
```typescript
console.log(strategy.convert('hello world! 123')); // 'helloWorld123'
```
---
### Available Strategies

|Name |	Description |	Input |	Result
----- | ------------ | ----- | -----
|camel-case	| Converts text to camelCase format |	hello world	| helloWorld

### Unicode Support

Joinify correctly handles text in different languages:
```typescript
console.log(strategy.convert('Привіт мир')); // 'привітМир'
console.log(strategy.convert('fünf sechs sieben')); // 'fünfSechsSieben'
```

### Future Plans

•	Add more strategies: kebab-case, snake_case, uppercase, lowercase.
•	Support chaining multiple strategies for sequential transformations.
•	CLI interface for using the package via the terminal.
•	Support for registering custom strategies.

### Testing

To check the functionality, you can run the tests:
```
npm test
```

### License

This project is licensed under the MIT License, meaning you can use it in commercial and personal projects under the terms of the license.
