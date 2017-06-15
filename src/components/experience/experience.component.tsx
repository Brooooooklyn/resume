import React from 'react'
import ReactMarkdown from 'react-markdown'

const style = require('./style.module')

export interface ExperienceProps {
  title: string
  companies: {
    name: string
    time: string
    title: string
    content: string
  }[]
}

export class Experience extends React.PureComponent<ExperienceProps, void> {
  render() {
    return (
      <section className={ 'experience ' + style.experience }>
        { this.renderTitle() }
        <hr/>
        { this.renderBody() }
      </section>
    )
  }

  private renderTitle() {
    return (
      <div className={ style.title }>
        <i className='icon icon-building'></i>
        <span className={ style.titleContent }>
          { this.props.title }
        </span>
      </div>
    )
  }

  private renderBody() {
    const bodys = this.props.companies
      .reverse()
      .map((data, i) => {
        return (
          <div key={ i }>
            <div>
              <span className={ style.company }>{ data.name }</span>
              <span className={ style['work-title'] }>{ data.title }</span>
              <span className={ style['work-time'] }>{ data.time }</span>
            </div>
            <div className={ 'experience-wrap ' + style.experience_wrap }>
              <ReactMarkdown source={ data.content || '' } />
            </div>
          </div>
        )
      })
    return (
      <div className={ style.body }>
        { bodys }
      </div>
    )
  }
}
