import React from 'react'

const style = require('./style.module')

export interface ExperienceProps {
  title: string
}

export class Experience extends React.PureComponent<ExperienceProps, void> {
  render() {
    return (
      <section className={ style.experience }>
        { this.renderTitle() }
        <hr/>
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
}
