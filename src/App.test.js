import { render, screen } from '@testing-library/react';
import App from './App';

test("react", () => {
  render(<App />);
  const linkElement = screen.getByText("react");
  !expect(linkElement).toBeInTheDocument();
});
