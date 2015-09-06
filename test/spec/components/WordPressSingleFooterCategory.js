'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressSingleFooterCategory from 'components/WordPressSingleFooterCategory.js';

describe('WordPressSingleFooterCategory', () => {
    let WordPressSingleFooterCategoryComponent;

    beforeEach(() => {
        WordPressSingleFooterCategoryComponent = createComponent(WordPressSingleFooterCategory);
    });

    it('should have its component name as default className', () => {
        expect(WordPressSingleFooterCategoryComponent._store.props.className).toBe('WordPressSingleFooterCategory');
    });
});
