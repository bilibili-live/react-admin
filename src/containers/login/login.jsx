import React, { Component } from 'react';
import Logo from '../../components/flex/logo/logo'
import Footer from '../../components/footer'

import { Container, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postJson: {
        userName: '',
        password: ''
      }
    }
  }

  linkReg = ()=> {
    this.props.history.replace('/register')
  }

  changeInput = (data, flag) => {
    // @param <Object>  - data
    // @param <Boolean> - flag
    // return <Boolean>
    const value = data.value.trim()
    if (!flag) {
      this.state.postJson.userName = value 
    } else this.state.postJson.password = value
    this.setState({
      postJson: this.state.postJson
    })
    return false
  }

  subLogin = ()=> {
    const postJson = this.state.postJson
    console.log(postJson)
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
            <Input value={ this.state.postJson.userName } onChange={ e=> { this.changeInput(e.target, false) }} />
          </InputGroup>
          <InputGroup className="m-3">
            <InputGroupAddon addonType="prepend">
            密码
            </InputGroupAddon>
            <Input value={ this.state.postJson.password } onChange={ e=> { this.changeInput(e.target, true) }} type="password" />
          </InputGroup>
          <br />
          <div className="text-center">
            <Button color="primary" onClick={ this.subLogin }>登录</Button>
            <Button onClick={ this.linkReg } color="link"> 去创建用户 </Button>
          </div>
          <Footer github='d1y' />
        </div>
      </Container>
    )
  }
}

export default Login;