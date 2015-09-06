'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressFooter from 'components/WordPressFooter.js';

describe('WordPressFooter', () => {
    let WordPressFooterComponent;

    beforeEach(() => {
        WordPressFooterComponent = createComponent(WordPressFooter);
    });

    it('should have its component name as default className', () => {
        expect(WordPressFooterComponent._store.props.className).toBe('WordPressFooter');
    });
});
