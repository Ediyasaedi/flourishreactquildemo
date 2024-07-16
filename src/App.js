import './App.css';
import Form from './Form';
import Preview from './Preview';
import { TaskProvider } from './TaskProvider';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <div class="row">
          <div class="column"><Form /></div>
          <div class="column"><Preview /></div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
