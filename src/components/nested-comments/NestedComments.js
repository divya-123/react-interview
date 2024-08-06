import React, { useState } from 'react'
import Comment from './Comment'
import useCommentTree from '../../hooks/use-comment-tree';
import "./styles.css";

const NestedComments = ({comments, onSubmit, onEdit, onDelete, onUpVote, onDownVote}) => {
  const [comment, setComment] = useState("");
  const {comments: commentsData} = useCommentTree(comments);

  const handleChange = (e) =>{
    setComment(e.target.value);
  }

  const handleSubmit = () =>{
    if(comment){
      setComment("");
    }
  }
  return (
    <div>
      NestedComments
      <Comment />
      <div className='add-comment'>
      <textarea value={comment} 
                onChange={handleChange} 
                rows={3} 
                cols={50} 
                placeholder='Add a new comment...'
                className='comment-textarea'
      />
      <button className='comment-button'
              onClick={handleSubmit}>
              Add Comment
      </button>
      {commentsData.map((comment)=>{
        return <Comment key={comment.id} 
                 comment={comment} 
                 onSubmitComment={handleChange}
        />
      })}
      </div>
    </div>
  )
}

export default NestedComments
