import React from 'react'

const style = require('./style.module.css')

export interface EducationProps {
  title: string
  content: string
}

export class EducationComponent extends React.PureComponent<EducationProps> {
  render() {
    const inner = {
      __html: this.props.content,
    }
    return (
      <section className={style.education}>
        <div className={style.titleWrap}>
          <i className="icon icon-human" />
          <span className={style.title}>{this.props.title}</span>
        </div>
        <hr />
        <div className={style.content} dangerouslySetInnerHTML={inner} />
      </section>
    )
  }
}
