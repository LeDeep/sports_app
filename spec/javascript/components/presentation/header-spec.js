import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import PageHeader from '../../../../app/javascript/components/presentation/page-header';
configure({adapter: new Adapter()});

describe("PageHeader", () => {
  it('renders header component', () => {
    const wrapper = shallow(<PageHeader/>);
    expect(wrapper.find('div.page-header')).to.have.lengthOf(1);
    expect(wrapper.contains("Welcome to LeDeep's Sport Up Page")).to.equal(true);
  });
});
