import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import UserProfileHeader from '../../../../app/javascript/components/presentation/user-profile-header';
configure({adapter: new Adapter()});

describe("UserTeamsHeader", () => {
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

  const wrapper = shallow(<UserProfileHeader
    {...props}
    />
  );

  it('renders user profile header component', () => {
    expect(wrapper.find('div.user-profile-header')).to.have.lengthOf(1);
    expect(wrapper.contains(props.userInfo.first_name)).to.equal(true);
  });
});
