import React from 'react'

const style = require('./style.module')

export interface ExperienceProps {
  title: string
  companies: {
    name: string
    time: string
    title: string
    content: string
    url: string
  }[]
}

export class Experience extends React.PureComponent<ExperienceProps> {
  render() {
    return (
      <section className={'experience ' + style.experience}>
        {this.renderTitle()}
        <hr />
        {this.renderBody()}
      </section>
    )
  }

  private renderTitle() {
    return (
      <div className={style.title}>
        <i className="icon icon-team-tie" />
        <span className={style.titleContent}>{this.props.title}</span>
      </div>
    )
  }

  private renderBody() {
    const bodys = this.props.companies.reverse().map((data, i) => {
      const inner = {
        __html: data.content || '',
      }
      return (
        <div key={i}>
          <div>
            <a href={data.url}>
              <span className={style.company}>{data.name}</span>
            </a>
            <span className={style.workTitle}>{data.title}</span>
            <span className={style.workTime}>{data.time}</span>
          </div>
          <div className={'experience-wrap ' + style.experience_wrap}>
            <div dangerouslySetInnerHTML={inner} />
          </div>
        </div>
      )
    })
    return <div className={style.body}>{bodys}</div>
  }
}
