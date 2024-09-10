import useFetch from "../hooks/useFetch";

const Posts = () => {
  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts');

  if(loading){
    return <div>Loading...</div>;
  }

  if(error){
    return <div>{error.message}</div>
  }

  return (
     <div>
      {
        data && <ul>
          {data.slice(0,5).map((data)=>{
            return (<li key={data.id}>
              <p>{data.title}</p>
              <p>{data.body}</p>
              </li>)
          })}
        </ul>
      }
      </div>
  )
  
}

export default Posts;