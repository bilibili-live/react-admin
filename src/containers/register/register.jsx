import React, { Component } from 'react';
import Logo from '../../components/flex/logo/logo'
import Footer from '../../components/footer'

import { Container, InputGroup, InputGroupAddon, Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import MockPostType from './mock'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
      modalText: '',
      postJson: {
        userName: '',
        password: '',
        checkPassword: '',
        type: false,
      }
    }
  }

  linkLogin = () => {
    this.props.history.replace('/login')
  }

  bindChangeInput = (ele, checkText) => {
    // @param <Object> - ele
    // @param <String> - checkText
    // @return <Boolean>
    const value = ele.target.value.trim()
    this.state.postJson[checkText] = value
    this.setState({
      postJson: this.state.postJson
    })
    return false
  }

  subRegister = ddlog => {
    const postJson = this.state.postJson
    console.log(postJson)
  }

  render() {
    const modal = true, toggle = ()=> {
      console.log('233')
    }, className = '233'
    return (
      <Container>
        <Logo />

        <Modal isOpen={ this.state.isModal } toggle={ ()=>{
          this.setState({
            isModal: false
          })
        } }>
          <ModalHeader toggle={toggle}>提示</ModalHeader>
          <ModalBody>
            { this.state.modalText }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>我知道了</Button>
          </ModalFooter>
        </Modal>

        <div>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              用户名
            </InputGroupAddon>
            <Input onChange={e => { this.bindChangeInput(e, 'userName') }} value={this.state.postJson.userName} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              密码
            </InputGroupAddon>
            <Input onChange={e => { this.bindChangeInput(e, 'password') }} value={this.state.postJson.password} type="password" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              确认密码
            </InputGroupAddon>
            <Input onChange={e => { this.bindChangeInput(e, 'checkPassword') }} value={this.state.postJson.checkPassword} type="password" />
          </InputGroup>
          <InputGroup className="mb-3" style={{ border: "2px solid #f0f3f5" }}>
            <InputGroupAddon addonType="prepend">
              用户类型
            </InputGroupAddon>
            <div className="ml-4">
              {MockPostType.map(item => {
                return (
                  <Button
                    key={item.type}
                    color={this.state.postJson.type == item.type ? 'danger' : 'link'}
                    onClick={() => {
                      this.state.postJson.type = item.type
                      this.setState({
                        postJson: this.state.postJson
                      })
                    }}
                  >{item.text}</Button>
                )
              })}
            </div>
          </InputGroup>
          <div className="text-center">
            <Button onClick={this.subRegister} color="primary">注册</Button>
            <Button onClick={this.linkLogin} color="link">已有用户</Button>
          </div>
          <Footer github='d1y' />
        </div>
      </Container>
    )
  }
}

export default Register;