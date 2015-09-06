'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressArchive from 'components/WordPressArchive.js';

describe('WordPressArchive', () => {
    let WordPressArchiveComponent;

    beforeEach(() => {
        WordPressArchiveComponent = createComponent(WordPressArchive);
    });

    it('should have its component name as default className', () => {
        expect(WordPressArchiveComponent._store.props.className).toBe('WordPressArchive');
    });
});
