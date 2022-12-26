import { render, screen } from '@testing-library/react';
import App from './App';
import ReserveTable from './components/ReserveTable';


test('Renders the Reserve a table heading', () => {
render(<App />);
const linkElement = screen.getByText("Reservation");
expect(linkElement).toBeInTheDocument();
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
