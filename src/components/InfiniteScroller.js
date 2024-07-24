import React from 'react'

const InfiniteScroller = () => {
    //Step 1 fetch and render
    //create 3 states - 1. Products 2. Page 3. Loading indicator 
    //Fetch products - Fetch API Call with limit of page - Function inside Try Catch Finally
    //Receive the data after converting to json
    //Call the fetch function from useEffect
    //Render the products using map
    //Step 2 styling
    //Add styling
    //Step 3 Implementation
    //create another useEffect which handles scroll event
    //Handle scroll event function
    //Step 4 optimization
    //Optimize number of API calls 1 - Throttling
    //Optimize number of API calls 2 - At a time only one API Call in progress
    //Add Loading UI
    //Optimize number of API calls 3 - Total number of products limit when total products rendered

  return (
    <div>
      Infinite Scroller Page
    </div>
  )
}

export default InfiniteScroller
