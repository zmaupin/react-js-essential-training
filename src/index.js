import React from 'react';
import { render } from 'react-dom';
import Library from './library.js';

let booksList = [
    {"title": "Hunger", "author": "Roxane Gay", "pages": 320},
    {"title": "The Sun Also Rises", "author": "Ernset Hemingway", "pages": 260},
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

render(
    <Library books={booksList} />,
    document.getElementById('root')
)
