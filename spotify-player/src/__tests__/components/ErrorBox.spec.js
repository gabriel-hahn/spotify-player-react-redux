import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import ErrorBox from '../../components/ErrorBox';
import { Creators as ErrorBoxActions } from '../../store/ducks/error';

const mockStore = createStore();

const INITIAL_STATE = {
  error: { visible: true, message: null },
};

const store = mockStore(INITIAL_STATE);
let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <ErrorBox />
    </Provider>,
  );
});

describe('ErrorBox Component', () => {
  describe('Shadow tests', () => {
    it('Should render the error box component', () => {
      expect(wrapper.exists());
    });
  });

  describe('Actions tests', () => {
    it('Should close the error message', () => {
      wrapper.find('button').simulate('click');
      expect(store.getActions()).toContainEqual(ErrorBoxActions.hideError());
    });
  });
});
