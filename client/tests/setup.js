// this is the sample code for the setup.js file

// const { configure } = require('@testing-library/react');
// const { JSDOM } = require('jsdom');

// // setup.js - Test setup configuration


// // Create a mock DOM environment for tests
// const dom = new JSDOM('<!doctype html><html><body></body></html>', {
//     url: 'http://localhost'
// });

// global.window = dom.window;
// global.document = dom.window.document;
// global.navigator = {
//     userAgent: 'node.js'
// };

// // Configure testing library
// configure({
//     testIdAttribute: 'data-testid'
// });

// // Mock localStorage
// global.localStorage = {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     removeItem: jest.fn(),
//     clear: jest.fn()
// };

// // Clean up after each test
// afterEach(() => {
//     jest.clearAllMocks();
// });