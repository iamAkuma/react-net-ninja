import './App.css'

function App() {

  const title = 'Welcome'
  const likes = 50;
  // const person = { name: 'aKuma', age: 20 }

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
        {/* Can't output object */}
      </div>
    </div>
  );
}

export default App;
