const test = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('../src/greet');

test('greets a provided name', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!');
});

test('defaults to world when no name is provided', () => {
  assert.equal(greet(), 'Hello, world!');
});

test('defaults to world when the name is empty', () => {
  assert.equal(greet(''), 'Hello, world!');
});
