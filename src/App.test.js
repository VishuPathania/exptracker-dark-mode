import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders LogIn component', () => {
  render(<App />);
  const loginElements = screen.queryAllByText(/Log in/i);
  expect(loginElements.length).toBeGreaterThan(0);
});



test('renders Forget Password page', () => {
  render(<App />);
  const forgetPasswordElement = screen.getByText(/Forget Password/i);
  expect(forgetPasswordElement).toBeInTheDocument();
});

test('renders Create new account', () => {
  render(<App />);
  const accountElement = screen.getByText(/Create new account/i);
  expect(accountElement).toBeInTheDocument();
});


test('submits a form on Log In page', async () => {
  render(<App />);
  userEvent.type(screen.getByLabelText(/Email/i), 'test@example.com');
  userEvent.type(screen.getByLabelText(/Password/i), 'password123');
  userEvent.click(screen.getByRole('button', { name: /Log in/i }));
  // Add assertions based on your form submission logic
});


