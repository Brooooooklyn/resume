import React from 'react'

const styles = require('./style.module')

export interface KnowledgeProps {
  title: string
  content: string
}

export class Knowledge extends React.PureComponent<KnowledgeProps> {
  render() {
    const inner = {
      __html: this.props.content,
    }
    return (
      <section className={styles.knowledge}>
        <div className={styles.knowledgeWrap}>
          <i className="icon icon-star-stroke" />
          <div className={styles.title}>{this.props.title}</div>
        </div>
        <hr />
        <div className={styles.content} dangerouslySetInnerHTML={inner} />
      </section>
    )
  }
}
