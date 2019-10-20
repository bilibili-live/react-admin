import React, { Component } from 'react';
import Logo from '../../components/flex/logo/logo'
import Footer from '../../components/footer'

import { Container, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Container>
        <Logo />
        <div>
          <InputGroup className="m-3">
            <InputGroupAddon addonType="prepend">
            用户名
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <InputGroup className="m-3">
            <InputGroupAddon addonType="prepend">
            密码
            </InputGroupAddon>
            <Input type="password" />
          </InputGroup>
          <br />
          <div className="text-center">
            <Button color="primary">登录</Button>
          </div>
          <Footer github='d1y' />
        </div>
      </Container>
    )
  }
}

export default Login;