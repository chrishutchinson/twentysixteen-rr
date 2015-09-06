'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressMenu from 'components/WordPressMenu.js';

describe('WordPressMenu', () => {
    let WordPressMenuComponent;

    beforeEach(() => {
        WordPressMenuComponent = createComponent(WordPressMenu);
    });

    it('should have its component name as default className', () => {
        expect(WordPressMenuComponent._store.props.className).toBe('WordPressMenu');
    });
});
