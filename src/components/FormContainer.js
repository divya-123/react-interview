import React from 'react'
import Form from './Form'
import FinalForm from './FinalForm'

const FormContainer = () => {
    const statuses = ['empty', 'typing', 'submitting', 'success', 'error']
  return (
    <>
      {/* {statuses.map((status)=>{
        return (
            <div>
                <h1>Form : {status}</h1>
                <Form status={status} />
            </div>)
      })} */}
      <FinalForm />
    </>
  )
}

export default FormContainer
