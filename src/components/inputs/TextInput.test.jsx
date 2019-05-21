import React from 'react';
import { shallow } from 'enzyme';
import TestTextInput from './TextInput';

const mockDefaultPropsVal = '';
const mockInputNamePropsVal = 'searchTerm';
const mockOnChangeHandler = jest.fn();
const TextInput = (
  <TestTextInput
    value={mockDefaultPropsVal}
    inputName={mockInputNamePropsVal}
    onChangeHandler={mockOnChangeHandler}
  />
);

describe('<TextInput />', () => {
  let wrapper = shallow(TextInput);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain a input element', () => {
    expect(wrapper.type()).toEqual('input');
  });

  describe('should have an html class attribute value', () => {
    wrapper = shallow(
      <TestTextInput
        value={mockDefaultPropsVal}
        inputName={mockInputNamePropsVal}
        onChangeHandler={mockOnChangeHandler}
      />,
    );

    it('equal to \'text-input\', when no classNames prop is set', () => {
      expect(wrapper.html()).toEqual('<input type="text" autoComplete="off" name="searchTerm" value=""/>');
    });

    it('equal to \'test-class\', when the classNames prop is set with \'test-class\' as the value', () => {
      wrapper.setProps({ classNames: 'test-class' });
      expect(wrapper.html()).toEqual('<input type="text" autoComplete="off" class="test-class" name="searchTerm" value=""/>');
    });
  });

  describe('should have an optional html placeholder attribute', () => {
    wrapper = shallow(
      <TestTextInput
        value={mockDefaultPropsVal}
        inputName={mockInputNamePropsVal}
        onChangeHandler={mockOnChangeHandler}
      />,
    );

    it('equal to \'test-me\', when the placeholder prop is set with \'test-me\' as the value', () => {
      wrapper.setProps({ placeholder: 'test-me' });
      expect(wrapper.html()).toEqual('<input type="text" autoComplete="off" name="searchTerm" placeholder="test-me" value=""/>');
    });
  });
});
