import React from 'react';

export default class extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <div>{ this.props.children }</div>
      </div>
    )
  }
}