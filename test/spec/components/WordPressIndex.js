'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressIndex from 'components/WordPressIndex.js';

describe('WordPressIndex', () => {
    let WordPressIndexComponent;

    beforeEach(() => {
        WordPressIndexComponent = createComponent(WordPressIndex);
    });

    it('should have its component name as default className', () => {
        expect(WordPressIndexComponent._store.props.className).toBe('WordPressIndex');
    });
});
