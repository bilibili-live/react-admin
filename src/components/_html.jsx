import React from 'react'

export default class extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: this.props.html }}></div>
      </>
    )
  }
}