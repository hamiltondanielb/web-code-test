import React from 'react'

export default ({title, category,publish_date, author, content}) => (
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <div className="caption">
        <h3>{title} - {category.title}</h3>
        <div>{publish_date}</div>
        <div>{author}</div>
        <div>{content}</div>
      </div>
    </div>
  </div>
)
