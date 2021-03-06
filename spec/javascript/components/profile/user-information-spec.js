import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import UserInformation from '../../../../app/javascript/components/profile/user-information';
configure({adapter: new Adapter()});

describe("UserInformation", () => {
  const props = {
    userInfo: {
      first_name:'Andrew',
      last_name:'Luck',
      email:'andrew@luck.com',
      height_feet:'6',
      height_inches:'5',
      weight:'240'
    }
  }

  const wrapper = shallow(<UserInformation
    {...props}
    />
  );

  it('renders user component', () => {
    expect(wrapper.find('div.user-profile')).to.have.lengthOf(1);
  });

  it('renders user name', () => {
    expect(wrapper.find('p#user-name')).to.have.lengthOf(1);
    expect(wrapper.contains('Andrew')).to.equal(true);
    expect(wrapper.contains('Luck')).to.equal(true);
  });

  it('renders user email', () => {
    expect(wrapper.find('p#user-email')).to.have.lengthOf(1);
    expect(wrapper.contains('andrew@luck.com')).to.equal(true);
  });

  it('renders user height and weight', () => {
    expect(wrapper.find('p#user-height-weight')).to.have.lengthOf(1);
    expect(wrapper.contains('6')).to.equal(true);
    expect(wrapper.contains('5')).to.equal(true);
    expect(wrapper.contains('240')).to.equal(true);
  });
});
