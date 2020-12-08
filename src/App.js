import './App.css';

import Home from './components/Home';
import Food from './components/Food';
import Clothes from './components/Clothes';
import Extra from './components/Extra';

function App() {
  return(
      <div>
        <h1>Help me find sustainable...</h1>
        <Home />
        <Food />
        <Clothes />
        <Extra />
      </div>

  );
}
export default App;
