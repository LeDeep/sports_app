import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../../../app/javascript/components/presentation/footer';
configure({adapter: new Adapter()});

describe("Footer", () => {
  it('renders footer component', () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper.find('div.app-footer')).to.have.lengthOf(1);
    expect(wrapper.contains("© 2018 LeDeep")).to.equal(true);
  });
});
