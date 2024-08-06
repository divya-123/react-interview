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

function App() {
  return (
    <div className="app">
      {/* <ProgressBarContainer />
      <InfiniteScrollContainer />      */}
      {/* <FormContainer />
      <MovingDot />
      <Accordian />
      <TaskApp /> */}
      <h1>Tic Tac Toe</h1>
      {/* <NestedComments comments={commentsData} 
                      onSubmit={()=>{}} 
                      onEdit={()=>{}} 
                      onDelete={()=>{}}
                      onUpVote={()=>{}}
                      onDownVote={()=>{}}/> */}

      <Board />
    </div>
  );
}

export default App;
