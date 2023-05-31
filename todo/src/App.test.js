import { render, screen, act } from '@testing-library/react';
import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import userEvent from '@testing-library/user-event';



test('check to do app heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/to do app/i);
  expect(linkElement).toBeInTheDocument();

});

test('add new task', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/add new task/i);
  const addButton = screen.getByRole('button',{name:/addTask/i});
  act(()=>{
    userEvent.type(linkElement,"dinner");
    userEvent.click(addButton[0]);
  });
  const newTask = screen.getByDisplayValue(/dinner/i);
  expect(newTask).toBeInTheDocument();
  screen.debug();
});
