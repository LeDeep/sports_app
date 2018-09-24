import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Interest from '../../../../app/javascript/components/profile/interest';
configure({adapter: new Adapter()});

describe("Interest", () => {
  const wrapper = shallow(<Interest
    name='Basketball'
    />
  );

  it('renders interest component', () => {
    expect(wrapper.find('div.interest-index')).to.have.lengthOf(1);
  });

  it('renders sport name', () => {
    expect(wrapper.find('p#sport-name')).to.have.lengthOf(1);
    expect(wrapper.contains('Basketball')).to.equal(true);
  });
});
