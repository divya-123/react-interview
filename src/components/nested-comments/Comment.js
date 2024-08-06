import React from 'react'

const Comment = ({comment, onSubmit}) => {
  return (
    <div className='comment'>
      <p>{comment.content}</p>
      <p></p>
      <p></p>
    </div>
  )
}

export default Comment
