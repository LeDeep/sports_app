import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import '../../../assets/stylesheets/page-header.css';


class PageHeader extends Component {
  render() {
    return(
      <div className='page-header'>
        <Header as='h1'>Welcome to LeDeep's Sport Up Page</Header>
      </div>
    )
  }
}

export default PageHeader
