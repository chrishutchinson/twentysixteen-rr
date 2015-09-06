'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressSearch from 'components/WordPressSearch.js';

describe('WordPressSearch', () => {
    let WordPressSearchComponent;

    beforeEach(() => {
        WordPressSearchComponent = createComponent(WordPressSearch);
    });

    it('should have its component name as default className', () => {
        expect(WordPressSearchComponent._store.props.className).toBe('WordPressSearch');
    });
});
