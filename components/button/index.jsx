import React, {PropTypes} from 'react';
function noop() {}

const Button = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    type          : PropTypes.string,
    mode          : PropTypes.string,
    disabled      : PropTypes.bool,
    onClick       : PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      type: 'button',
      mode: 'blue',
      disabled: false,
      onClick:noop,
    };
  },
  _handleClick(e){
    this.props.onClick(this);
  },

  render(){
    let {prefixCls, mode, type, disabled} = this.props;
    let modeClass = prefixCls + '-button-' + mode;
    if(mode === 'warn') {
      modeClass = modeClass + ' ' + prefixCls + '-button-flat';
    }

    let allClass = prefixCls + '-button ' + modeClass;
    if(disabled === true) {
      allClass = allClass + ' ' + prefixCls + '-button-disabled';
    }

    if(type === 'link') {
      return (<a className={allClass} disabled={disabled} onClick={this._handleClick}>{this.props.children}</a>);
    } else {
      return (<button type="button" className={allClass} disabled={disabled} onClick={this._handleClick}>{this.props.children}</button>);
    }
  }
});
module.exports = Button;
