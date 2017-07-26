import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './_form.css'

const required = value => (value ? undefined : 'Required')
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={style.formDiv}>
    <label className={style.label}>{label}</label>
    <div className={style.inputDiv}>
      <input className={style.input} {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className={style.errorBox}>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const SubmitSuggestionForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="Name"
        type="text"
        component={renderField}
        label="Name"
        validate={[required]}
      />
      <Field
        name="Email"
        type="text"
        component={renderField}
        label="Email"
        validate={[required, email]}
      />
      <Field
        name="Suggestion"
        type="text"
        component={renderField}
        label="Suggestion"
        validate={[required]}
      />

      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'SubmitSuggestionForm' // a unique identifier for this form
})(SubmitSuggestionForm)
