import React, { useState } from 'react'

const FinalForm = () => {
    //state variable
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
   //event handlers
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setStatus('typing');
    try {
        await submitForm(answer);
        setStatus('success');
        
    } catch (error) {
        setStatus('typing');
        setError(error);
    }
  }
  const handelTextareaChange = (e) =>{
    setAnswer(e.target.value);
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const fullName = firstName + ' ' + lastName;
   //return success UI
  if (status === 'success'){
    return (<p>That's right!!</p>)
  }

   //main JSX
  return (
    <>
      <h2>City Quiz</h2>
      <label>First Name: </label>
      <input value={firstName} onChange={handleFirstNameChange}/>
      <label>Last Name: </label>
      <input value={lastName} onChange={handleLastNameChange}/>
      <label>Full Name : {fullName}</label>
      <p>Which is your favorite city?</p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handelTextareaChange} disabled={status === 'submitting'}/>
        <br/>
        <button disabled={status==='submitting' || answer.length===0}>Submit</button>
        {error!==null && <p>{error.message}</p>}
      </form>
    </>
  )
}


  function submitForm(ans){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let shouldError = ans.toLowerCase() !== 'delhi';

            console.log(shouldError);
            if(shouldError){
                reject(new Error("Try again!!"));
            }else{
                resolve();
            } 
        }, 1500);
    })
  }
export default FinalForm
