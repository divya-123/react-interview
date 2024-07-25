
const Panel = ({isActive, title, children, onShow}) => {
  
  
  return (
    <section>
      <h3>{title}</h3>
        {isActive && <p>{children}</p>}      
      <button onClick={onShow}>{isActive? "Hide": "Show"}</button>
    </section>
  )
}

export default Panel
