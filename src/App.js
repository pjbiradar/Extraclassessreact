import './App.css';
import Context from './Hooks/Context';
import { Createcontext } from './Hooks/Create';
import { Red } from './Reducer/Red';
// import Classcomponents from './Components/Classcomponents';
// import Functioncomp from './Components/Functioncomp';

function App() {
  return (
    <div className="App">
      <h1>This is useContext example</h1>
     <Createcontext>
       <Context/>

     </Createcontext>

<h1>this is useReducer</h1>
     <Red/>
     
      
    
    </div>
  );
}

export default App;
