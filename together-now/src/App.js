import './App.css';
import Ninja from './components/Ninjas';

function App() {
  return (
    <div className="App">

      <div className="ninja">

        <div className="card">

          <Ninja 
          firstName= {"Robert"} 
          lastName= {"Best"} 
          age= {25} 
          hair= {"Brown"} />

          <Ninja 
          firstName= {"Jordan"} 
          lastName= {"Ronk"} 
          age= {26} 
          hair= {"Black"} />

          <Ninja 
          firstName= {"Matthew"} 
          lastName= {"York"} 
          age= {24} 
          hair= {"Hazel"} />
        </div>
        
      </div>

    </div>
  );
}

export default App;
