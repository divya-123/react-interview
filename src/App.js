import './styles.css';
import InfiniteScroller from './components/InfiniteScroller';
import ProgressBarContainer from './components/ProgressBarContainer';
import InfiniteScrollContainer from './components/InfiniteScrollContainer';


function App() {
  return (
    <div className="app">
      <ProgressBarContainer />
      <InfiniteScrollContainer />     
    </div>
  );
}

export default App;
