import './styles.css';
import ProgressBarContainer from './components/ProgressBarContainer';
import InfiniteScrollContainer from './components/InfiniteScrollContainer';
import FormContainer from './components/FormContainer';
import MovingDot from './components/MovingDot';


function App() {
  return (
    <div className="app">
      {/* <ProgressBarContainer />
      <InfiniteScrollContainer />      */}
      <FormContainer />
      <MovingDot />
    </div>
  );
}

export default App;
