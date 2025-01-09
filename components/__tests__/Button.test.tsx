import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../ui/Button';

test('Button renders correctly and responds to press', () => {
  const onPressMock = jest.fn();

  const { getByText } = render(
    <Button title="Click me" onPress={onPressMock} />
  );

  const button = getByText('Click me');
  expect(button).toBeTruthy();

  // Проверяем, что вызов функции onPress происходит при нажатии на кнопку.
  fireEvent.press(button);
  expect(onPressMock).toHaveBeenCalledTimes(1);
});
