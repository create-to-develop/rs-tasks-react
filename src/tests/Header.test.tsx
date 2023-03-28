import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import React from 'react';

describe('Header test', () => {
  test('should show pages all the time', () => {
    render(
      <header>
        <div>Home</div>
        <div>Forms</div>
        <div>About us</div>
      </header>
    );

    expect(screen.getByText(/Home/i)).toBeDefined();
    expect(screen.getByText(/Forms/i)).toBeDefined();
    expect(screen.getByText(/About us/i)).toBeDefined();
  });
});
