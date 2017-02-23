import React from 'react'
const style = require('./style.module')

export interface HeaderProps {
  name: string
  email: string
  site: string
  phone: number
  github: {
    name: string
    url: string
  }
  zhihu: {
    name: string
    url: string
  }
  wechat: string
}

export default class Header extends React.PureComponent<HeaderProps, void> {
  render() {
    return (
      <div className={ style.header }>
        <h3 className={ style.name } >{ this.props.name }</h3>
        <hr className={ style.hr }/>
        <div className={ style.headerInfoWrap }>
          <div className='header-info'>
            <i className='icon icon-envelope'></i>
            <span className='header-info-content'>{ this.props.email }</span>
          </div>
          <div className='header-info'>
            <i className='icon icon-rss'></i>
            <a className='header-info-content'
              href={ this.props.site }
              target='_blank'>
              { this.props.site }
            </a>
          </div>
          <div className='header-info'>
            <i className='icon icon-phone'></i>
            <span className='header-info-content'>{ this.props.phone }</span>
          </div>
          <div className='github header-info'>
            <i className='icon icon-github'></i>
            <a className='header-info-content'
              href={ this.props.github.url }
              target='_blank'>
              { this.props.github.name }
            </a>
          </div>
          <div className='header-info zhihu'>
            <i className='icon icon-zhihu'></i>
            <a className='header-info-content'
              href={ this.props.zhihu.url }
              target='_blank'>
              { this.props.zhihu.name }
            </a>
          </div>
          <div className='header-info wechat'>
            <i className='icon icon-wechat'></i>
            <span className='header-info-content'>{ this.props.wechat }</span>
          </div>
        </div>
      </div>
    )
  }
}
