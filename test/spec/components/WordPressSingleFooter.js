'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressSingleFooter from 'components/WordPressSingleFooter.js';

describe('WordPressSingleFooter', () => {
    let WordPressSingleFooterComponent;

    beforeEach(() => {
        WordPressSingleFooterComponent = createComponent(WordPressSingleFooter);
    });

    it('should have its component name as default className', () => {
        expect(WordPressSingleFooterComponent._store.props.className).toBe('WordPressSingleFooter');
    });
});
