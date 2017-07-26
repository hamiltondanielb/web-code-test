import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link} from 'react-router-dom'
import CategoryList from './components/Articles/CategoryList.js'
import ArticleList from './components/Articles/ArticleList.js'
import ArticleView from './components/Articles/ArticleView.js'
import SubmitSuggestion from './components/Articles/SubmitSuggestion.js'
import styles from './index.css'

class App extends Component {
  render() {
    return (
        <div>
          <nav className='navbar navbar-inverse navbar-fixed-top'>
            <div className="container">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/suggestions">Submit Suggestion</Link>
                </li>
              </ul>
            </div>
          </nav>
          <main className={styles.mainBody}>
            <Route exact path="/" component={CategoryList} />
            <Route path="/:categoryId/articles" exact component={ArticleList} />
            <Route path="/articles/:articleId" exact component={ArticleView} />
            <Route path="/suggestions" exact component={SubmitSuggestion} />
          </main>
        </div>
    );
  }
}

export default App;
