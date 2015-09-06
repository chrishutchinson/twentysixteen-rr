'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressSinglePage from 'components/WordPressSinglePage.js';

describe('WordPressSinglePage', () => {
    let WordPressSinglePageComponent;

    beforeEach(() => {
        WordPressSinglePageComponent = createComponent(WordPressSinglePage);
    });

    it('should have its component name as default className', () => {
        expect(WordPressSinglePageComponent._store.props.className).toBe('WordPressSinglePage');
    });
});
