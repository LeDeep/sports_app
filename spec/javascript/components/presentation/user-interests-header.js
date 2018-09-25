import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import UserInterestsHeader from '../../../../app/javascript/components/presentation/user-interests-header';
configure({adapter: new Adapter()});

describe("UserInterestsHeader", () => {
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

  const wrapper = shallow(<UserInterestsHeader
    {...props}
    />
  );

  it('renders user interests header component', () => {
    expect(wrapper.find('div.user-interests-header')).to.have.lengthOf(1);
    expect(wrapper.contains(props.userInfo.first_name)).to.equal(true);
  });
});
