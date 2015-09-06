'use strict';

describe('TwentysixteenRrApp', () => {
  let React = require('react/addons');
  let TwentysixteenRrApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TwentysixteenRrApp = require('components/TwentysixteenRrApp.js');
    component = React.createElement(TwentysixteenRrApp);
  });

  it('should create a new instance of TwentysixteenRrApp', () => {
    expect(component).toBeDefined();
  });
});
