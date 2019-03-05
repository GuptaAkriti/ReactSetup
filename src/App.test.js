import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

describe('App Component', () => {
    it('renders the Counter wrapper', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
})