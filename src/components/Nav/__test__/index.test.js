

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    //BASELINE TEST
    it('renders', () => {
        render(<Nav />);
    });
    //SNAPSHOT TEST
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // ASSERT VALUE COMPARISON
        expect(asFragment()).toMatchSnapshot();
    });
})

// describe('emoji is visible', () => {
//     it('inserts emoji into the h2', () => {
//         // ARRANGE
//         const { getByLabelText } = render(<Nav />);
//         // ASSERT
//         expect(getByLabelText('camera')).toHaveTextContent('📸');
//     })
// })

// describe('links are visible', () => {
//     it('inserts text into the links', () => {
//         // ARRANGE
//         const { getByTestId } = render(<Nav />);
//         // ASSERT
//         expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
//         expect(getByTestId('about')).toHaveTextContent('About me');
//     });
// })