import React from 'react';
import { shallow } from 'enzyme';
import TestButtonInput from './Button';

const mockOnClickHandler = jest.fn();


const ButtonInput = (
  <TestButtonInput
    buttonText="Search"
    classNames="apply-promo-code"
    disableButton={false}
    onClick={mockOnClickHandler}
  />
);

describe('<ButtonInput />', () => {
  let wrapper = shallow(ButtonInput);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain a button element', () => {
    expect(wrapper.type()).toEqual('button');
  });

  it('should be disabled when disableButton prop is true', () => {
    wrapper.setProps({ disableButton: true });
    expect(wrapper.prop('disabled')).toEqual(true);
  });

  it('should not be disabled when disableButton prop is false', () => {
    wrapper.setProps({ disableButton: false });
    expect(wrapper.prop('disabled')).toEqual(false);
  });

  it('should call a click handler when clicked', () => {
    wrapper.find('button').simulate('click', {
      preventDefault: () => {},
    });
    expect(mockOnClickHandler.mock.calls.length).toEqual(1);
  });

  describe('should have an html class attribute value', () => {
    wrapper = shallow(
      <TestButtonInput
        buttonText="Search"
        disableButton={false}
        onClick={mockOnClickHandler}
      />,
    );

    it('equal to \'button-input\', when no classNames prop is set', () => {
      expect(wrapper.html()).toEqual('<button type="button">Search</button>');
    });

    it('equal to \'test-class\', when the classNames prop is set with \'test-class\' as the value', () => {
      wrapper.setProps({ classNames: 'test-class' });
      expect(wrapper.html()).toEqual('<button class="test-class" type="button">Search</button>');
    });
  });
});
