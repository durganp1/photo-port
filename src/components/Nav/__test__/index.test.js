

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    {
        name: 'portraits',
        description: 'Portraits of people in my life'
    }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    //BASELINE TEST
    it('renders', () => {
        render(<Nav
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
            contactSelected = {mockContactSelected}
            setContactSelected = {mockSetContactSelected}
         />);
    });
    //SNAPSHOT TEST
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
            contactSelected = {mockContactSelected}
            setContactSelected = {mockSetContactSelected}
             />);
        // ASSERT VALUE COMPARISON
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // ARRANGE
        const { getByLabelText } = render(<Nav
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
            contactSelected = {mockContactSelected}
            setContactSelected = {mockSetContactSelected}
             />);
        // ASSERT
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // ARRANGE
        const { getByTestId } = render(<Nav
            categories = { categories }
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
            contactSelected = {mockContactSelected}
            setContactSelected = {mockSetContactSelected}
             />);
        // ASSERT
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})