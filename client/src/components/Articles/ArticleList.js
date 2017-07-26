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
    this.props.getArticlesByCategory(this.props.match.params.categoryId)
  }

  render () {
    const { articles } = this.props

    return (
      <div className={styles.container}>
        <div className="row">
          {articles && articles.currentArticles.map((article) =>{
            return (
              <Link to={`/articles/${article.id}`} key={article.id} >
                <Article {...article} />
              </Link>
            );
          })}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(ArticleList)
