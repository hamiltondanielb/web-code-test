import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../services/Articles/actions.js'
import { Link, history } from 'react-router-dom'
import styles from './_articlesList.css'
import SubmitSuggestionForm from './SubmitSuggestionForm.js'

const mapStateToProps = (state) => ({
  articles:  state.articles
})

const mapDispatchToActions = {
  ...actions,
}

export class SubmitSuggestion extends React.Component {

  static propTypes = {
    articles: PropTypes.object,
  }

  state = {
    success: false,
  }

  handleSubmit = (values) => {
    this.props.submitSuggestion(values).then(()=>{
      this.setState({
        success:true,
      })
      setTimeout(()=>{  window.location = '/' }, 3000);
    })
  }

  render () {
    return (
      <div>
      {this.state.success?
        <div className="alert alert-success" role="alert">Thanks for you submission. Redirecting to home page.</div>
        :null}
        <SubmitSuggestionForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToActions)(SubmitSuggestion)
