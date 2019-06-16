import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose, hoistStatics } from 'recompose';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import AuthContainer from '../../actions/auth/container';
import { Text, BlogButton } from '../reusable';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleLogout = () => {
    this.props.authActions.logOut();
    this.props.history.push('/');
  }

  render() {
    return (
        <Navbar expand='md'>
          <NavbarBrand href='/'>
            <Text size='small'>KH Blog</Text>
          </NavbarBrand>
          <NavbarToggler onClick={this.handleToggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/'>
                  <Text size='small'>Home</Text>
                </NavLink>
              </NavItem>
              {
                this.props.auth.isAuthenticated && (
                  <NavItem>
                    <NavLink href='/suggestions'>
                      <Text size='small'>View Suggestions</Text>
                    </NavLink>
                  </NavItem>
                )
              }
              {
                this.props.auth.isAuthenticated && (
                  <NavItem>
                    <NavLink href='/add/post'>
                      <Text size='small'>Add New Post</Text>
                    </NavLink>
                  </NavItem>
                )
              }
              {
                this.props.auth.isAuthenticated && (
                  <NavItem>
                    <NavLink>
                      <BlogButton onClick={this.handleLogout} size='sm'>
                        Log Out
                      </BlogButton>
                    </NavLink>
                  </NavItem>
                )
              }
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

const enhance = hoistStatics(compose(
  AuthContainer,
));
export default withRouter(enhance(Header));
