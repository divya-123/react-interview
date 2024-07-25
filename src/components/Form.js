import React from 'react'

const Form = ({status}) => {
  if(status==='success') return (<h3>That's right!</h3>)
  return (
    <form>
      <p>What is capital of India?</p>
      <textarea disabled={status === 'submitting'}/>
      <button disabled={status === 'submitting' || status === 'empty'}>Submit</button>
      {status === 'submitting' && <p>Submitting...</p>}
      {status === 'error' && <p>Error!!</p>}
    </form>
  )
}

export default Form
