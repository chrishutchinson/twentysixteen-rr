'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressSinglePost from 'components/WordPressSinglePost.js';

describe('WordPressSinglePost', () => {
    let WordPressSinglePostComponent;

    beforeEach(() => {
        WordPressSinglePostComponent = createComponent(WordPressSinglePost);
    });

    it('should have its component name as default className', () => {
        expect(WordPressSinglePostComponent._store.props.className).toBe('WordPressSinglePost');
    });
});
