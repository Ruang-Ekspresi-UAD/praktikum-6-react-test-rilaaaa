import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Counter, Greeting, AlertButton } from './latihan';

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

test('reset the count using reset button', () => {
  render(<Counter />);
  const incrementButton = screen.getByTestId('increment-button');
  const resetButton = screen.getByTestId('reset-button');
  const counterValue = screen.getByTestId('counter-value');

  fireEvent.click(incrementButton);
  fireEvent.click(resetButton);
  expect(counterValue).toHaveTextContent('0');
});

test('greeting component {nama kalian}', () => {
  render(<Greeting name="John Doe" />);
  const greetingElement = screen.getByTestId('greeting');
  expect(greetingElement).toHaveTextContent('Hello, John Doe');
});

test('greeting component {nama dosen kalian}', () => {
  render(<Greeting name="Dr. Smith" />);
  const greetingElement = screen.getByTestId('greeting');
  expect(greetingElement).toHaveTextContent('Hello, Dr. Smith');
});

test('triggers alert with correct message when clicked', () => {
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<AlertButton message="Test Alert" />);
  const alertButton = screen.getByTestId('alert-button');

  fireEvent.click(alertButton);
  expect(alertMock).toHaveBeenCalledWith('Test Alert');
  alertMock.mockRestore();
});
