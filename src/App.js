import './App.css'
import Navbar from './Navbar';
import Home from './Home';
function App() {

  const title = 'Welcome'
  const likes = 50;
  // const person = { name: 'aKuma', age: 20 }

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
      </div>
    </div>
  );
}

export default App;
