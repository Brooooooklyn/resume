import React from 'react'
const styles = require('./style.module')

interface SectionProps {
  title: string
}

export default class extends React.PureComponent<SectionProps, void> {
  render() {
    return (
      <div>
        { this.renderTitle() }
      </div>
    )
  }

  renderTitle() {
    return (
      <div className={ styles.title }>
        { this.props.title }
      </div>
    )
  }
}
