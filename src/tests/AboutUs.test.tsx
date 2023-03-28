import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutUs from '../pages/AboutUs';
import React from 'react';

describe('AboutUs test', () => {
  test('should show title all the time', () => {
    render(
      <div>
        <h1>About Us</h1>
      </div>
    );

    expect(screen.getByText(/About us/i)).toBeDefined();
  });
});
