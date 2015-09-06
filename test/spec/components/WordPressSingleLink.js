'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressSingleLink from 'components/WordPressSingleLink.js';

describe('WordPressSingleLink', () => {
    let WordPressSingleLinkComponent;

    beforeEach(() => {
        WordPressSingleLinkComponent = createComponent(WordPressSingleLink);
    });

    it('should have its component name as default className', () => {
        expect(WordPressSingleLinkComponent._store.props.className).toBe('WordPressSingleLink');
    });
});
