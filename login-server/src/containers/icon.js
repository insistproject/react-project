import React, {Component} from 'react';

class Icon extends Component {
  state = {
  };
  render() {
    const {current} = this.state;
    return (
      <div>
        <i className="iconfont icon-shoucang" />
        <p>字体图标</p>
      </div>
    );
  }
}


export default Icon;
