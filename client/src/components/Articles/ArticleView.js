import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../services/Articles/actions.js'
import { Link } from 'react-router-dom'
import styles from './_articlesList.css'
import Article from './Article.js'

const mapStateToProps = (state) => ({
  articles:  state.articles
})

const mapDispatchToActions = {
  ...actions,
}

export class ArticleList extends React.Component {

  static propTypes = {
    articles: PropTypes.object,
  }

  componentDidMount () {

    this.props.getArticle(this.props.match.params.articleId)
  }

  render () {
    const { articles } = this.props
    return (
      <div className={styles.container}>
      {articles && articles.currentArticle ?
        <Article {...articles.currentArticle} />
         : null
       }

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(ArticleList)
