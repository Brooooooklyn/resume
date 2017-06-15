import React from 'react'
import ReactMarkdown from 'react-markdown'

const style = require('./style.module.css')

export interface SkillProps {
  title: string
  content: string
}

export class Skill extends React.PureComponent<SkillProps, void> {
  render() {
    return (
      <section className={ style.skill }>
        <div className={ style['title-wrap'] }>
          <i className='icon icon-palette'/>
          <span className={ style.title }>{ this.props.title }</span>
        </div>
        <hr/>
        <ReactMarkdown className={ style.content } source={ this.props.content } />
      </section>
    )
  }
}
