import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders component correctly', () => {
    const { container } = render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'logo.svg');

    const paragraph = screen.getByText(
      (_, node) => node.textContent === 'Edit src/App.js and save to reload.'
    );
    expect(paragraph).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
