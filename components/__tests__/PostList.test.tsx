import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import PostList from '../PostList';

// Мок-функция для замены реального вызова fetch в тестах.
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
      ]),
  })
) as jest.Mock;

test('PostList fetches and displays posts', async () => {
  const { getByText } = render(<PostList />);

  // Проверяем успешную отрисовку данных после их загрузки.
  await waitFor(() => expect(getByText('Post 1')).toBeTruthy());
  expect(getByText('Post 2')).toBeTruthy();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/posts'
  );
});
