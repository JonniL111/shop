import { Main } from './app/page';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
