import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Isso resolve o erro de "Found multiple elements"
afterEach(() => {
  cleanup();
});