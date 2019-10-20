import React, { PureComponent } from 'react';

class Footer extends PureComponent {

  static defaultProps = {
    author: '陈某人',
    github: 'd1y'
  }

  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const { author, github } = this.props
    return (
      <React.Fragment>
        <p className="text-center text-muted mt-3">create by <a href={ `https://github.com/${ github }` } target="_blank">{ author }</a> </p>
      </React.Fragment>
    );
  }
}
 
export default Footer;