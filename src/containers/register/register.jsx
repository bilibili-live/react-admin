import React, { Component } from 'react';
import Logo from '../../components/flex/logo/logo'
import Footer from '../../components/footer'

import { Container, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import MockPostType from './mock'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postJson: {
        userName: '',
        password: '',
        checkPassword: '',
        type: false,
      }
    }
  }
  render() {
    return (
      <Container>
        <Logo />
        <div>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              用户名
              </InputGroupAddon>
            <Input value={ this.state.postJson.userName } />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              密码
              </InputGroupAddon>
            <Input value={ this.state.postJson.password } type="password" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              确认密码
              </InputGroupAddon>
            <Input value={ this.state.postJson.checkPassword } type="password" />
          </InputGroup>
          <InputGroup className="mb-3" style={{ border: "2px solid #f0f3f5" }}>
            <InputGroupAddon addonType="prepend">
              用户类型
            </InputGroupAddon>
            <div className="ml-4">
              { MockPostType.map(item=> {
                return (
                  <Button
                  key={ item.type } 
                  color={ this.state.postJson.type == item.type ? 'danger' : 'link'}
                  onClick={ ()=> {
                    this.state.postJson.type = item.type
                    this.setState({
                      postJson: this.state.postJson
                    })
                  } }
                  >{ item.text }</Button>
                )
              })}
            </div>
          </InputGroup>
          <div className="text-center">
            <Button color="primary">注册</Button>
          </div>
          <Footer github='d1y' />
        </div>
      </Container>
    )
  }
}

export default Register;