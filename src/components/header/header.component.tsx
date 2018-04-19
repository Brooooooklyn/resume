import React from 'react'
const style = require('./style.module')

export interface HeaderProps {
  name: string
  email: string
  site: string
  phone: string
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

export class Header extends React.PureComponent<HeaderProps> {
  render() {
    return (
      <div className={style.header}>
        <h3 className={style.name}>{this.props.name}</h3>
        <hr className={style.hr} />
        <div className={style.headerInfoWrap}>
          <div className="header-info">
            <i className="icon icon-envelope" />
            <a className="header-info-content" href="mailto:lynweklm@gmail.com">
              {this.props.email}
            </a>
          </div>
          <div className="header-info">
            <i className="icon icon-rss" />
            <a
              className="header-info-content"
              href={this.props.site}
              target="_blank"
            >
              {this.props.site}
            </a>
          </div>
          <div className="header-info">
            <i className="icon icon-phone" />
            <a className="header-info-content" href="tel:+86-018516508691">
              {this.props.phone}
            </a>
          </div>
          <div className="github header-info">
            <i className="icon icon-github" />
            <a
              className="header-info-content"
              href={this.props.github.url}
              target="_blank"
            >
              {this.props.github.name}
            </a>
          </div>
          <div className="header-info zhihu">
            <i className="icon icon-zhihu" />
            <a
              className="header-info-content"
              href={this.props.zhihu.url}
              target="_blank"
            >
              {this.props.zhihu.name}
            </a>
          </div>
          <div className="header-info wechat">
            <i className="icon icon-wechat" />
            <span className="header-info-content">{this.props.wechat}</span>
          </div>
        </div>
      </div>
    )
  }
}
