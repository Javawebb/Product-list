import './App.css';
import { Form } from './components/Form';
import { Products } from './components/Products';

function App() {
  return (
    <div className="App flex">
      <Form/>
      <Products/>
    </div>
  );
}

export default App;
