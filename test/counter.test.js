import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';
import Display from './display';

test('Counter Default Value must be 0', () => {
  render(<Counter />);
  const counterValue = screen.getByTestId('counter-value');
  expect(counterValue).toHaveTextContent('0');
});

test('increment works when button clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByTestId('increment-button');
  const counterValue = screen.getByTestId('counter-value');

  fireEvent.click(incrementButton);
  expect(counterValue).toHaveTextContent('1');
});

test('decrement works when button clicked', () => {
  render(<Counter />);
  const decrementButton = screen.getByTestId('decrement-button');
  const counterValue = screen.getByTestId('counter-value');

  fireEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent('-1');
});

test('display has correct value', () => {
  render(<Display value={42} />);
  const displayValue = screen.getByTestId('display-value');
  expect(displayValue).toHaveTextContent('Value: 42');
});
