import routes from './routes';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div >
      <Header/>
      {routes}
    </div>
  );
}

export default App;
