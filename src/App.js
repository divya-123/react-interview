import './styles.css';
import ProgressBarContainer from './components/ProgressBarContainer';
import InfiniteScrollContainer from './components/InfiniteScrollContainer';
import FormContainer from './components/FormContainer';
import MovingDot from './components/MovingDot';
import Accordian from './components/Accordian';
import TaskApp from './components/TaskApp';
import NestedComments from './components/nested-comments/NestedComments';
import commentsData from './data/comment.json';
import Square from './components/tic-tac-toe/Square';
import Board from './components/tic-tac-toe/Board';
import Autocomplete from './components/autocomplete/Autocomplete';
import Map from './components/Map';

function App() {
  // const fetchSuggestions = async (query) =>{
  //   const response = await fetch(`https://dummyjson/recipes/search?q=${query}`);
  //   if(!response.ok){
  //     throw new Error("Network response is not ok.")
  //   } 
  //   const result = await response.json();
  //   console.log("result", result);
  //   return result.recipes;

  // }

//   const staticData = [
//     "apple",
//     "banana",
//     "orange",
//     "grape",
//     "mango",
//     "melon",
//     "berry",
//     "peach",
//     "cherry",
//     "plum"
// ];
  return (
    <div className="app">
      <ProgressBarContainer />
      <InfiniteScrollContainer />     
      <FormContainer />
      <MovingDot />
      {/* <Accordian /> */}
      <TaskApp />
      {/* <h1>Tic Tac Toe</h1> */}
      {/* <NestedComments comments={commentsData} 
                      onSubmit={()=>{}} 
                      onEdit={()=>{}} 
                      onDelete={()=>{}}
                      onUpVote={()=>{}}
                      onDownVote={()=>{}}/> */}

      {/* <Board /> */}
      {/* <h1>Autocomplete</h1> */}
      {/* <Autocomplete placeholder={"Enter recipe"} 
                    staticData={staticData}
                    fetchSuggestions={fetchSuggestions}
                    dataKey={"name"}
                    customLoading={<>Loading Recipes...</>}
                    onSelect={(res)=>{console.log(res)}}
                    onChange={()=>{}}
                    onBlur={()=>{}}
                    onFocus={()=>{}}
                    customStyles={{}}
        /> */}
        {/* <h1>Carousel</h1> */}
        <Map />
    </div>
  );
}

export default App;
