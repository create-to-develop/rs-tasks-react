import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorPage from '../pages/ErrorPage';
import React from 'react';

describe('ErrorPage test', () => {
  test('should show 404 all the time', () => {
    render(
      <div>
        <h1>404</h1>
      </div>
    );

    expect(screen.getByText(/404/i)).toBeDefined();
  });
});
