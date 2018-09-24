import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Membership from '../../../../app/javascript/components/profile/membership';
configure({adapter: new Adapter()});

describe("Membership", () => {
  const wrapper = shallow(<Membership
    name='Chicago Bears'
    />
  );

  it('renders membership component', () => {
    expect(wrapper.find('div.membership-index')).to.have.lengthOf(1);
  });

  it('renders team name', () => {
    expect(wrapper.find('p#team-name')).to.have.lengthOf(1);
    expect(wrapper.contains('Chicago Bears')).to.equal(true);
  });
});
