'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressHeader from 'components/WordPressHeader.js';

describe('WordPressHeader', () => {
    let WordPressHeaderComponent;

    beforeEach(() => {
        WordPressHeaderComponent = createComponent(WordPressHeader);
    });

    it('should have its component name as default className', () => {
        expect(WordPressHeaderComponent._store.props.className).toBe('WordPressHeader');
    });
});
