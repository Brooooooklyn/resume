import React from 'react'

const style = require('./style.module.css')

export interface SkillProps {
  title: string
  content: string
}

export class Skill extends React.PureComponent<SkillProps> {
  render() {
    const inner = {
      __html: this.props.content,
    }
    return (
      <section className={style.skill}>
        <div className={style.titleWrap}>
          <i className="icon icon-palette" />
          <span className={style.title}>{this.props.title}</span>
        </div>
        <hr />
        <div className={style.content} dangerouslySetInnerHTML={inner} />
      </section>
    )
  }
}
