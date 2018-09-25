import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import User from '../../../../app/javascript/components/users/user';
configure({adapter: new Adapter()});

describe("User", () => {
  const wrapper = shallow(<User
    id='3'
    first_name='Andrew'
    last_name='Luck'
    email='andrew@luck.com'
    height_feet='6'
    height_inches='5'
    weight='240'
    />
  );

  it('renders user component', () => {
    expect(wrapper.find('div.user-index')).to.have.lengthOf(1);
  });

  it('renders user name', () => {
    expect(wrapper.find('p#user-name')).to.have.lengthOf(1);
    expect(wrapper.contains('Andrew')).to.equal(true);
    expect(wrapper.contains('Luck')).to.equal(true);
  });

  it('includes link to users profile', function() {
    expect(wrapper.find('Link').prop('to')).to.be.equal('/profile/3');
  });
});
