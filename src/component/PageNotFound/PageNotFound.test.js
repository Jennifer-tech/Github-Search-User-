import React from 'react';
import { render, screen } from '@testing-library/react';
import PageNotFound from './PageNotFound';
import '@testing-library/jest-dom';

describe('PageNotFound Component', () => {
    it('renders without crashing and displays text', () => {
        render(<PageNotFound />);
        expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
    })
})