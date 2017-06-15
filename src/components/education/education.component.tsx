import React from 'React'
import ReactMarkdown from 'react-markdown'

const style = require('./style.module.css')

export interface EducationProps {
  title: string
  content: string
}

export class EducationComponent extends React.PureComponent<EducationProps, void> {
  render() {
    return (
      <section className={ style.education }>
        <div className={ style['title-wrap'] }>
          <i className='icon icon-human' />
          <span className={ style.title }>{ this.props.title }</span>
        </div>
        <hr/>
        <ReactMarkdown className={ style.content } source={ this.props.content } />
      </section>
    )
  }
}
