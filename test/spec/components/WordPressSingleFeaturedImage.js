'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressSingleFeaturedImage from 'components/WordPressSingleFeaturedImage.js';

describe('WordPressSingleFeaturedImage', () => {
    let WordPressSingleFeaturedImageComponent;

    beforeEach(() => {
        WordPressSingleFeaturedImageComponent = createComponent(WordPressSingleFeaturedImage);
    });

    it('should have its component name as default className', () => {
        expect(WordPressSingleFeaturedImageComponent._store.props.className).toBe('WordPressSingleFeaturedImage');
    });
});
