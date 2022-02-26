import { fireEvent, render } from '@testing-library/react';
import { expect, test } from 'vitest';

import Header from './';

// 모든 아이콘에 동일한 로직이 설정되어있습니다.
test('아이콘 클릭 시 alert창이 호출된다.', () => {
  const { getByTitle, getByText } = render(<Header />);

  const MenuIcon = getByTitle('menu');

  fireEvent.click(MenuIcon);

  expect(getByText('준비중입니다.')).toBeTruthy();
});
