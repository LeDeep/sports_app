import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import UserTeamsHeader from '../../../../app/javascript/components/presentation/user-teams-header';
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

  const wrapper = shallow(<UserTeamsHeader
    {...props}
    />
  );

  it('renders user teams header component', () => {
    expect(wrapper.find('div.user-teams-header')).to.have.lengthOf(1);
    expect(wrapper.contains(props.userInfo.first_name)).to.equal(true);
  });
});
