import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import India from './Component/India';
import World from './Component/World';
import Header from './Component/Header';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
          <Route path="/" exact component={India}></Route>
          <Route path="/india" component={India}></Route>
          <Route path="/world" component={World}></Route>
      </Router>
    </div>
  );
}

export default App;
