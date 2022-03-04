import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

import AlertPortal, { Alert } from '.';

test('render alert', () => {
  const { getByText } = render(<Alert message="alert test" />, {
    wrapper: AlertPortal,
  });

  expect(getByText('alert test')).toBeTruthy();
});
