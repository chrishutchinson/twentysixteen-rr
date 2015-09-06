'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPressSidebar from 'components/WordPressSidebar.js';

describe('WordPressSidebar', () => {
    let WordPressSidebarComponent;

    beforeEach(() => {
        WordPressSidebarComponent = createComponent(WordPressSidebar);
    });

    it('should have its component name as default className', () => {
        expect(WordPressSidebarComponent._store.props.className).toBe('WordPressSidebar');
    });
});
