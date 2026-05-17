/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { expect, test, beforeEach } from 'vitest';
import App from './App';
beforeEach(() => {
  cleanup();
  document.body.innerHTML = ''; 
});

test('Verifica se o titulo Calculadora aparece na tela', () => {
  render(<App />);
  const titulo = screen.getByText(/Calculadora/i);
  expect(titulo).toBeDefined(); 
});

test('Verifica se o valor inicial do resultado é 0', () => {
  render(<App />);
  const resultados = screen.getAllByTestId('resultado');
  const ultimoResultado = resultados[resultados.length - 1];
  expect(ultimoResultado.textContent).toBe('0');
});

test('Verifica se o botão de somar está presente', () => {
  render(<App />);
  const botoes = screen.getAllByRole('button', { name: /somar/i });
  expect(botoes[0]).toBeDefined();
});