'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressSingle from 'components/WordPressSingle.js';

describe('WordPressSingle', () => {
    let WordPressSingleComponent;

    beforeEach(() => {
        WordPressSingleComponent = createComponent(WordPressSingle);
    });

    it('should have its component name as default className', () => {
        expect(WordPressSingleComponent._store.props.className).toBe('WordPressSingle');
    });
});
