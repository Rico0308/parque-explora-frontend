import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Inicio from "./components/pages/Inicio";
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Inicio} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
