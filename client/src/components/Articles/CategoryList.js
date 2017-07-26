import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../services/Articles/actions.js'
import { Link } from 'react-router-dom'
import styles from './_articlesList.css'

const mapStateToProps = (state) => ({
  articles:  state.articles
})

const mapDispatchToActions = {
  ...actions,
}

export class CategoryList extends React.Component {

  static propTypes = {
    articles: PropTypes.object,
  }

  componentDidMount () {
    this.props.getCategories()
  }


  render () {
    const { articles } = this.props

    return (
      <div className={styles.container}>
        <ul className="list-group">
          {articles && articles.categories.map((category) =>{
            return <li className="list-group-item" key={category.id}><Link to={`${category.id}/articles`}>{category.title}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(CategoryList)
