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

test('Typing new task without clicking add', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/add new task/i);
  const addButton = screen.getByRole('button',{name:/addTask/i});
  userEvent.type(linkElement,"dinner");
  const newTask = screen.getByDisplayValue(/dinner/i);
  expect(newTask).toBeEnabled();
});

test('Adding new task', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/add new task/i);
  const addButton = screen.getByRole('button',{name:/addTask/i});
  userEvent.type(linkElement,"dinner");
  act(()=>{userEvent.click(addButton)});
  const newTask = screen.getByDisplayValue(/dinner/i);
  expect(newTask).toBeDisabled();
  const taskList = screen.getAllByRole('textbox');
  if(taskList.length !== 5){
    throw new Error("task not list is not correct")
  }
});


