import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../../app/javascript/components/header';
configure({adapter: new Adapter()});

describe("Header", () => {
  it('renders header component', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('div.app-header')).to.have.lengthOf(1);
    expect(wrapper.contains("Welcome to LeDeep's Sport Up Page")).to.equal(true);
  });
});
