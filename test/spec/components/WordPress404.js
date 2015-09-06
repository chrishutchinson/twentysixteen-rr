'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordPress404 from 'components/WordPress404.js';

describe('WordPress404', () => {
    let WordPress404Component;

    beforeEach(() => {
        WordPress404Component = createComponent(WordPress404);
    });

    it('should have its component name as default className', () => {
        expect(WordPress404Component._store.props.className).toBe('WordPress404');
    });
});
