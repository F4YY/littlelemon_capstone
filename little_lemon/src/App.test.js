import { render, screen } from '@testing-library/react';
import HeroSection from './components/HeroSection';
import Highlight from './components/Highlight';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Reserve a table", () => {
    test('Renders reserve a table button in HeroSection', () => {
        render(<Router><HeroSection /></Router>);
        const buttonElement = screen.getByText("Reserve a Table");
        expect(buttonElement).toBeInTheDocument();
      });
    test('Renders Order Online button in Highlight', () => {
        render(<Router><Highlight /></Router>);
        const buttonElement = screen.getByText("Order Online");
        expect(buttonElement).toBeInTheDocument();
      });
});