'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressMenuItem from 'components/WordPressMenuItem.js';

describe('WordPressMenuItem', () => {
    let WordPressMenuItemComponent;

    beforeEach(() => {
        WordPressMenuItemComponent = createComponent(WordPressMenuItem);
    });

    it('should have its component name as default className', () => {
        expect(WordPressMenuItemComponent._store.props.className).toBe('WordPressMenuItem');
    });
});
