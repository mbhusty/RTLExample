import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputField from '../ui/InputField';

test('InputField updates value on change', () => {
  const onChangeMock = jest.fn();

  const { getByTestId } = render(
    <InputField label="Name" value="" onChange={onChangeMock} />
  );

  const input = getByTestId('input');
  // Симулируем ввод текста в текстовое поле.
  fireEvent.changeText(input, 'John Doe');

  expect(onChangeMock).toHaveBeenCalledWith('John Doe');
});
