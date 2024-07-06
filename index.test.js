const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Load the HTML file
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('index.html', () => {
    let dom;
    let document;

    beforeEach(() => {
        dom = new JSDOM(html);
        document = dom.window.document;
    });

    test('it has a title', () => {
        const title = document.querySelector('title');
        expect(title).not.toBeNull();
        expect(title.textContent).toBe('Sample Page');
    });

    test('it has a heading with the correct text', () => {
        const heading = document.querySelector('h1#title');
        expect(heading).not.toBeNull();
        expect(heading.textContent).toBe('Hello, World!');
    });

    test('it has a paragraph with the correct class and text', () => {
        const paragraph = document.querySelector('p.description');
        expect(paragraph).not.toBeNull();
        expect(paragraph.textContent).toBe('This is a sample page.');
    });
});
