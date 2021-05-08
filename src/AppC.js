import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import India from './funcComponents/India';
import World from './funcComponents/World';
import Header from './funcComponents/Header';
const AppC = ()=>
{
    return(
        <div className="container-fluid">
        <Router>
            <Header />
            <Route path="/" exact component={India} />
            <Route path="/india" component={India} />
            <Route path="/world" component={World}></Route>
        </Router>
        </div>
    )
}

export default AppC;